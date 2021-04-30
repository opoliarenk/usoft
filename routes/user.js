'use strict'

const router = require('express').Router();
const user = require('../controllers/user');
const {protect} = require('../helper/protect');

router.get('/', user.getALlUsers);

router.get('/:id', user.getUserById);

router.post('/', protect, user.createUser);

router.post('/avatar', user.uploadAvatar);

router.patch('/:id', user.updUser);

router.delete('/:id', user.deleteUser);

module.exports = router;