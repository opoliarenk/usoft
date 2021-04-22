'use strict'

const router = require('express').Router();
const user = require('../controllers/user');

router.get('/', user.getALlUsers);

router.get('/:id', user.getUserById);

router.post('/', user.createUser);

router.post('/avatar', user.uploadAvatar);

router.patch('/:id', user.updUser);

router.delete('/:id', user.deleteUser);

module.exports = router;