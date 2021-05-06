'use strict'

const PostCategory = require('../models/PostCategory');
const {Post} = require('../models/Post');
const Comment = require('../models/Comment');
const LikePost = require('../models/LikePost');
const asyncHand = require('../midleware/asyncHand');

exports.getAllPosts = asyncHand(async (req, res) => {
    await Post.findAndCountAll()
        .then(results => {
            res.status(200).json({
                success: true,
                data: results,
            })
        })
});

exports.getPostById = asyncHand(async (req, res) => {
    const post = await Post.findOne({where: {id: req.params.id}});

    if (post) {
        res.status(200).json({
            success: true,
            data: post,
        });
    } else {
        res.status(400).send('post not found');
    }
});

exports.getCommentsPost = asyncHand(async (req, res) => {
    if (await Post.findOne({where: {id: req.params.id}})) {
        const comments = await Comment.findAll({where: {postId: req.params.id}});

        res.status(200).json({
            success: true,
            data: comments,
        });
    } else {
        res.status(400).send('post not found');
    }
});

exports.createComment = asyncHand(async (req, res, next) => {
    const content = req.body.content;

    await Comment.create({
        author: req.user.id,
        publishDate: Date.now(),
        content: content,
        postId: req.params.id,
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });

    res.status(200).json({
        success: true,
        message: 'comment created successfully',
        data: content,
    });
});

exports.getCategoriesPost = async(req, res) => {
    if (await Post.findOne({where: {id: req.params.id}})) {
        const postCategory = await PostCategory.findAll({where: {postId: req.params.id}});

        res.status(200).json({
            success: true,
            data: postCategory,
        });
    } else {
        res.status(400).send({
            message: 'post not found',
        });
    }
}

exports.getLikes = async(req, res) => {
    if (await Post.findOne({where: {id: req.params.id}})) {
        const likes = await LikePost.findAll({where: {postId: req.params.id}})
        res.status(200).json({
            success: true,
            data: likes,
        });
    } else {
        res.status(400).send({
            message: 'cannot get likes from post',
        });
    }
}

exports.createPost = asyncHand(async (req, res) => {
    const {content, title} = req.body;

    await Post.create({
        author: req.user.id,
        title: title,
        publishDate: Date.now(),
        status: 'active',
        content: content,
    });
    res.status(200).json({
        success: true,
        message: 'create post successfully',
    })
});

exports.createLike = asyncHand(async (req, res) => {
    const postId = req.params.id;
    const like = await LikePost.findOne({where: {
            author: req.user.id,
            postId: postId,
        }});

    if (!like && await Post.findOne({where: {id: postId}})) {
        await LikePost.create({
            author: req.user.id,
            postId: postId,
        });

        res.status(200).json({
            success: true,
            message: 'like create successfully',
        });
    } else {
        res.status(400).send('cannot like post');
    }
});

exports.updatePost = asyncHand(async (req, res) => {
    const post = await Post.findOne({where: {id: req.params.id}});

    if (post && req.user.id === post.author) {
        let data = {};

        data['content'] = req.body.content;
        await Post.update(data, {where: {id: req.params.id}});

        res.status(200).send('post edit successfully');
    } else {
        res.status(400).send('permission denied');
    }
});

exports.deletePost = asyncHand(async (req, res) => {
    const post = await Post.findOne({where: {id: req.params.id}});

    if (post && (req.user.role === 'admin' || req.user.id == post.author)) {
        if (post !== null) {
            res.status(200).json({
                success: true,
                message: 'delete successfully',
            });
        } else {
            res.status(400).send({
                message: 'post not found',
            });
        }
    } else {
        res.status(403).send({
            message: 'permission denied',
        });
    }
});

exports.deleteLike = asyncHand(async(req, res) => {
    const postId = req.params.id;
    const like = await LikePost.findOne({where: {
            author: req.user.id,
            postId: postId,
        }});

    if (!like && await Post.findOne({where: {id: postId}})) {
        await LikePost.destroy({where: {
                author: req.user.id,
                postId: postId,
            }});
        res.status(200).json({
            success: true,
            message: 'like removed successfully',
        });
    } else {
        res.status(400).send('cannot delete like post');
    }
});
