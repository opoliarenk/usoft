'use strict'

const Comment = require('../models/Comment');
const Likes = require('../models/LikeComment');
const asyncHand = require('../midleware/asyncHand');

exports.getCommentById = asyncHand(async (req, res) => {
    const comment = await Comment.findOne({where: {id: req.params.id}});

    if (comment) {
        res.status(200).json({
            success: true,
            data: comment,
        })
    } else {
        res.status(400).send('comment not found');
    }
});

exports.updateComment = asyncHand(async (req, res) => {
    const comment = await Comment.findOne({where: {id: req.params.id}});

    if (req.user.id === comment.postId) {
        let data = {};

        if (comment) {
            data['content'] = req.body.content;
            await Comment.update(data, {where: {id: req.params.id}});
        }
        res.status(200).send('comment edit successfully');
    } else {
        res.status(400).send('permission denied');
    }
});

exports.deleteComment = asyncHand(async (req, res) => {
    if (req.user.role === 'admin' || req.user.id == req.params.id) {
        const comment = await Comment.destroy({where: {id: req.params.id}});

        if (comment !== null) {
            res.status(200).json({
                success: true,
                message: 'delete successfully',
            });
        } else {
            res.status(400).send({
                message: 'comment not found',
            });
        }
    } else {
        res.status(403).send({
            message: 'permission denied',
        });
    }
});

exports.getLikes = asyncHand(async (req, res) => {
    if (await Comment.findOne({where: {id: req.params.id}})) {
        const likes = await Likes.findAll({where: {commentId: req.params.id}});

        res.status(200).json({
            data: likes,
            success: true,
        });
    } else {
        res.status(400).send('comment not found');
    }
});

exports.createLike = asyncHand(async (req, res) => {
    const commId = req.params.id;
    const like = await Likes.findOne({where: {
        author: req.user.id,
        commentId: commId,
    }});

    if (!like && await Comment.findOne({where: {id: commId}})) {
        await Likes.create({
            author: req.user.id,
            commentId: commId,
        });
    } else {
        res.status(400).send('cannot like comment')
    }
})

exports.deleteLike = asyncHand(async(req, res) => {
    const commId = req.params.id;
    const like = await Likes.findOne({where: {
        author: req.user.id,
        commentId: commId,
    }});

    if (!like && await Comment.findOne({where: {id: commId}})) {
        await Likes.destroy({where: {
            author: req.user.id,
            commentId: commId,
        }});
    } else {
        res.status(400).send('cannot delete like comment');
    }
})


