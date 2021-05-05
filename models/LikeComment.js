const Sequelize = require('sequelize');

module.exports = sequelize.define('LikeComment', {
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
    commentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});
