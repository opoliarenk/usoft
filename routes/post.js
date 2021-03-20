const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('get all posts');
});

router.get('/:id', async (req, res) => {
    console.log('get post by id');
});

router.get('/:id/comments', async (req, res) => {
    console.log('get comment by id');
});

router.post('/:id/comments', async (req, res) => {
    console.log('create a new comment');
});

router.get('/:id/categories', async (req, res) => {
    console.log('get all categories associated with the specified post');
});

router.get('/:id/like', async (req, res) => {
    console.log('get all likes under the specified post');
});

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