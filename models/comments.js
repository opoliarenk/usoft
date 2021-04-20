const Sequelize = require('sequelize');
const sequelize = require('../db/db');

const comments = sequelize.define('commentEntity', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    author: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    publishDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
