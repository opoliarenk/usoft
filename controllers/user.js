'use strict'

const User = require('../models/User');
const asyncHand = require('../helper/asyncHand');
const bcrypt = require('bcrypt');

exports.getALlUsers = asyncHand(async (req, res, next) => {
    await User.findAndCountAll()
        .then(results => {
            // const itemCount = results.count;
            // const pageCount = Math.ceil(results.count / req.query.limit);
            res.status(200).json({
                success: true,
                data: results,
                // pageCount,
                // itemCount,
                // pages: paginate.getArrayPages(req)(3, pageCount, req.query.limit),
            });
        })
        .catch(err => next(err))
});

exports.getUserById = asyncHand(async (req, res) => {
    const user = await User.findOne({where: {id: req.params.id}});
    if (user) {
        res.status(200).json({
            success: true,
            data: user,
        })
    }else {
        res.status(400).send('user not found');
    }
});

exports.createUser = asyncHand(async(req, res) => {
    //only for admins
    if (req.user.role === 'admin') {
        const {login, password, passConfirm, email, role, fullName} = req.body;
        const checkLogin = await User.findOne({where: {login: login}});
        const checkEmail = await User.findOne({where: {email: email}});
        const validEmail = isEmail.validate(email, {errorLevel: false});

        if (checkEmail || checkLogin || !validEmail) {
            res.status(400).send({
                message: 'wrong params',
            });
        }

        await User.create({
            login: login,
            password: await bcrypt.hash(password, 10),
            full_name: fullName,
            email: email,
            confirmed: false,
            confirmStr: confirmStr,
        })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User."
                });
            });
        res.status(200).json({success: true});
    } else {
        res.status(400).send({
            message: "Authorization denied, only admins can visit this route"
        })
    }
});

exports.uploadAvatar = asyncHand(async (res, req) => {
    const avatar = req.file.filename;
    await User.update({avatar: avatar}, {where: {id: req.user.id}});

    res.status(200).json({success: true});
});

exports.updUser = asyncHand(async (res, req) => {
    const {login, fullName, email, password} = req.body;
    let data = {};

    //update login
    if (login !== undefined) {
        const checkLogin = await User.findOne({ where: { login } });

        if (checkLogin) {
            res.status(400).send({
                message: 'login is exists'
            });

            return;
        }
        data['login'] = login;
    }
    //update full name
    if (fullName !== undefined) {
        data['full_name'] = fullName;
    }
    //update email
    if (email !== undefined) {
        const checkEmail = await User.findOne({ where: { email } });

        if (checkEmail) {
            res.status(400).send({
                message: 'email is exists'
            });

            return;
        }
        data['email'] = email;
    }
    //update password
    if (password !== undefined) {
        const hashPass = await bcrypt.hash(password, 10);

        data['password'] = hashPass;
    }
    //update user
    const updUser = await User.update(data, {where: {id: req.params.id}});

    if (updUser[0] === 1) {
        res.status(200).send({
            message: 'user update successfully'
        });
    } else {
        res.status(400).send({
            message: 'could not update user'
        });
    }
});


exports.deleteUser = asyncHand(async (req, res) => {
    //delete user
    const user = User.destroy({where: {id: req.params.id}});

    if (user !== null) {
        res.status(200).json({
            success: true,
            data: {},
        });
    } else {
        res.status(400).send({
            message: 'could not delete user',
        });
    }
});