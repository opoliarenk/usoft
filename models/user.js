const Sequelize = require('sequelize');
const sequelize = require('../db/db');

const user = sequelize.define('userEntity', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    login: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    full_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        isEmail: true,
        allowNull: false,
    },
    profilePicture: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    rating: {
        type: Sequelize.INTEGER,
        defaultValue: '0',
        allowNull: false,
    },
    role: {
        type: Sequelize.STRING,
        defaultValue: 'user',
        allowNull: false,
    }
});

class User {
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
