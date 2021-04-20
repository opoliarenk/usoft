'use strict';

const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
    console.log('get spec comment data');
});

router.get('/:id/like', async (req, res) => {
    console.log('get all likes under the spec comment');
});

router.post('/:id/like', async (req, res) => {
    console.log('create a new like under a comment');
});

router.patch('/:id', async (req, res) => {
    console.log('update spec comment data');
});

router.delete('/:id', async (req, res) => {
    console.log('delete a comment');
});

router.delete('/:id/like', async (req, res) => {
    console.log('delete a like under a comment');
});

module.exports = router;
