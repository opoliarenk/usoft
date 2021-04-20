const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('get all categories');
});

router.get('/:id', async (req, res) => {
    console.log('get category by id');
});

router.get('/:id/posts', async (req, res) => {
    console.log('get post by category');
});

router.post('/', async (req, res) => {
    console.log('create a new category');
});

router.patch('/:id', async (req, res) => {
    console.log('update spec category');
});

router.delete('/:id', async (req, res) => {
    console.log('delete a category');
});

module.exports = router;
