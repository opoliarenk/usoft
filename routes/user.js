'use strict'

const express = require('express');
const router = express.Router();

router.get('/', });

router.get('/:id', async (req, res) => {
    console.log("get spec user data");
});

router.post('/', async (req, res) => {
    console.log("create a new user");
});

router.post('avatar', async (req, res) => {
    console.log("let avatar");
});

router.patch('/:id', async (req, res) => {
    console.log("update user data");
});

router.delete('/:id', async (req, res) => {
    console.log(`delete user ${req.params.id}`);
});

module.exports = router;