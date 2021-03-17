// const Sequelize = require('sequelize');
// const sequelize = require('../db/db');

// const user = sequelize.define('userEntity', {
//
// });

class User {
    constructor(Sequelize, DataTypes) {
        this.Sequelize = Sequelize;
        this.DataTypes = DataTypes;
    }
    async createUser(login, password, full_name, email) {
        try {
            return await user.create({
                login: login,
                password: password,
                full_name: full_name,
                email: email
            })
        }
        catch (e) {
            console.log(e)
            return null
        }
    }
    async getUsersById(id) {
        try {
            return await user.findAll({where: {id: [id]}})
        } catch (e) {
            console.log(e)
            return null
        }
    }
}

module.exports = {User};
