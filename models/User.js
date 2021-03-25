const Sequelize = require("sequelize");

module.exports = sequelize.define("User", {
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
    },
})