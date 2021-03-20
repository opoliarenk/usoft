'use strict';

const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.register = async (req, res) => {
    // if (!req.body.login || !req.body.password || !req.body.confirmPass || !req.body.email) {
    //     res.status(400).send({
    //         message: "Validation error"
    //     });
    //     return;
    // }
    const {
        login,
        password,
        full_name,
        email,
    } = req.body;
    try {
        const findUser = await User.findOne({where: {[Op.or] : [ {login}, {email}]}});
        if (findUser) {
            res.status(422).send({
                message: 'User with that email or login already exists'
            });
            return;
        }
        const user = {
            login: login,
            password: password,
            full_name: full_name,
            email: email,
        };

        await User.create(user)
            .then(data => {
                res.send(data);
            })
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

// exports.deleteUser =
