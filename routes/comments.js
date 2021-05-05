'use strict';

const router = require('express').Router();
const comment = require('../controllers/comments');

router.get('/:id', comment.getCommentById);

router.get('/:id/like', comment.getLikes);

router.post('/:id/like', comment.createLike);

router.patch('/:id', comment.updateComment);

router.delete('/:id', comment.deleteComment);

router.delete('/:id/like', comment.deleteLike);

module.exports = router;
