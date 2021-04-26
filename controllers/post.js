'use strict'

const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment')
const asyncHand = require('../helper/asyncHand');
const jwt = require('jsonwebtoken');

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

exports.createComment = asyncHand(async (req, res) => {
    res.status(200).json({
        success: true,
        postId: req.params.id,
        user: req.user.id,
    });
});
