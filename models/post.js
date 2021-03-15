const Sequelize = require('sequelize');
const sequelize = require('../db/db');

const post = sequelize.define('postEntity', {
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
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    publishDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM,
        values: ['active', 'inactive'],
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categories: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});