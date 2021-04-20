'use strict';

const User = require('../models/User');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const asyncHand = require('../helper/asyncHand');
const isEmail = require('isemail');
const { randStr } = require('../helper/randStr');
const jwt = require("jsonwebtoken");
const sendMail = require('../helper/sendMessageEmail');

exports.register = asyncHand(async (req, res) => {
    const {login, email, password, fullName, passwordConfirm} = req.body;
    const checkLogin = await User.findOne({where: {login: login}});
    const checkEmail = await User.findOne({where: {email: email}});
    // const checkPass =
    const validEmail = isEmail.validate(email, {errorLevel: false});


    if (checkLogin) {
        res.status(400).send({
            message: 'User with that login already exists',
        });
        return ;
    }
    if (checkEmail) {
        res.status(400).send({
            message: 'User with that email already exists',
        });
        return ;
    }
    if (!validEmail) {
        res.status(400).send({
            message: 'Incorrect email',
        });
        return;
    }

    const confirmStr = randStr();

    await User.create({
        login: login,
        password: await bcrypt.hash(password, saltRounds),
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

    const message = {
        to: req.body.email,
        subject: 'Confirm email',
        html: `<h2>Congrats! You're registered on USOF<h2>
                    <a href="http://localhost:8080/api/auth/confirm/${confirmStr}  "> Go to this link for confirm you registration!</a>
                    <br>
                    <i>Don't repeat this mail!</i>`
    }
    sendMail(message);
    res.status(200).send({
        message: `Account created successfully ${confirmStr}`
    });
    res.status(200).json({success: true, data: token});

    return;
});

exports.login = async (req, res) => {
    const {login, password} = req.body;
    try {
        const user = await User.findOne({where: {
                login: login
            }});
        if (!user || !bcrypt.compare(password, user.password)) {
            res.status(400).send({
                message: 'User or password is incorrect'
            });

            return;
        }
        if (!user.confirmed) {
            res.status(400).send({
                message: 'please confirm email'
            });

            return;
        }
        const payload = { id: user.id };
        const token = jwt.sign(payload, 'gk4Fryv', {
            expiresIn: 3000,
        });

        res.status(200).json({ success: true, data: token });

        return;

    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Could not perform operation at this time, kindly try again later.'
        });

        return;
    }
};


exports.confirmEmail = async (req, res) =>{
    const user = await User.findOne({where: {confirmStr: req.params.code}});

    if (user) {
        let confirm = {confirmed: true};
        await User.update(confirm, {where: ({id: user.id})});

        res.status(200).send('email confirmed');

        return;
    } else {
        res.status(400).send('user not found');

        return;
    }
}

exports.resetPass = asyncHand(async (req, res) => {
    const {email} = req.body.email;
    const user = await User.findOne({where: {email: email}});
    const resConfirmStr = randStr();

    if (user) {
        await User.update({
            resetToken: resetToken,
            expires: Date.now() + 36000
        }, {where: {id: user.id}});

        const message = {
            to: email,
            subject: 'Password reset request',
            html: `<h2>To change password press the link<h2>
                    <a href="http://localhost:3000/api/auth/password-reset/${resConfirmStr} "> Change password </a>
                    <br>
                    <i>Don't repeat this mail!</i>`
        }
        sendMail(message);
        res.status(200).send('password reset link send');
    } else {
        res.status(400).send('user not found')
    }
});

exports.resetConfirm = async(req, res) => {

};




