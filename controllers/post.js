'use strict'

const PostCategory = require('../models/PostCategory');
const Post = require('../models/Post');
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
    const comments = await Comment.findAll({where: {postId: req.params.id}});

    if (comments) {
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
        publishDate: new Date.now(),
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
    const postCategory = await PostCategory.getAll({where: {postId: req.params.id}});

    res.status(200).json({
        success: true,
        data: postCategory,
    });
}

exports.getLikes = async(req, res) => {
    const likes = await LikePost.getAll({where: {postId: req.params.id}})

    if (likes) {
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
    
})