'use strict'

const router = require('express').Router();
const post = require('../controllers/post');
const {isToken} = require('../midleware/isToken');

router.get('/', post.getAllPosts);

router.get('/:id', post.getPostById);

router.get('/:id/comments',post.getCommentsPost);

router.post('/:id/comments', isToken, post.createComment);

router.get('/:id/categories', async (req, res) => {
    console.log('get all categories associated with the specified post');
});

router.get('/:id/like', post.getLikes);

router.post('/', async (req, res) => {
    console.log('create a new post');
});

router.post('/:id/like', async (req, res) => {
    console.log('create a new like under the spec post');
});

router.patch('/:id', async (req, res) => {
    console.log('update post');
})

router.delete('/:id', async (req, res) => {
    console.log('delete post');
});

router.delete('/:id/like', async (req, res) => {
    console.log('delete a like under a post');
});

module.exports = router;
