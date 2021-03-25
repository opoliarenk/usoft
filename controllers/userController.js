'use strict';

const User = require('../models/User');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require('nodemailer');

exports.register = async (req, res) => {
    if (!req.body.login || !req.body.password || !req.body.passwordConfirm || !req.body.email) {
        res.status(400).send({
            message: "Validation error"
        });
        return;

    }

    const {
        login,
        password,
        passwordConfirm,
        full_name,
        email,
    } = req.body;

    try {
        if (password !== passwordConfirm) {
            res.status(422).send({message: 'confirm password'});
            return;
        }

        const ifExist = await User.findOne({where: {
                [Op.or]: [{login}, {email},]
            }});

        if (ifExist) {
            res.status(422).send({message: 'User with that email or login already exists'});
            return;
        }

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'lenailoveyou11@gmail.com',
                pass: 'lena280302'
            }
        });

        let mailOptions = {
            from: 'lenailoveyou11@gmail.com',
            to: email,
            subject: 'Sending Email using Node.js',
            text: 'Nikaa poluchilos'
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(`\n \n voooot \n \n` + error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        const user = {
            login: login,
            password: await bcrypt.hash(password, saltRounds),
            full_name: full_name,
            email: email,
        };

        await User.create(user)
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User."
                });
            });
        res.status(201).send({
            message: 'Account created successfully'
        });
        return;

    } catch (e) {
        console.log(e);
        res.status(500).send({
                message: 'Could not perform operation at this time, kindly try again later.'
        });
        return;

    }

};

exports.login = async (req, res) => {
    const {
        login,
        password,
        email,
    } = req.body;

    try {
        const user = await User.findOne({where: {
                login: login
            }});
        if (!user) {
            res.status(500).send({
                message: 'invalid login'
            });
        } else if (!bcrypt.compare(password, user.password)) {
            res.status(500).send({
                message: 'invalid password'
            });
        }
        res.status(201).send({
            message: 'Log in successfully'
        });
        return;

    }catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Could not perform operation at this time, kindly try again later.'
        });
        return;

    }
};


