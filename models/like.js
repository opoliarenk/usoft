const Sequelize = require('sequelize');
const sequelize = require('../db/db');

const like = sequelize.define('likeEntity', {
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
    postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    commentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    type: {
        type: Sequelize.ENUM,
        values: ['like', 'dislike'],
        allowNull: false,
    }
});