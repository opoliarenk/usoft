const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Sequelize {
        static associate(models) {
            Post.hasMany(models.PostCategory, {foreignKey: 'postId'});
        }
    }

    Post.init({
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
    }, {
        sequelize,
        modelName: 'Post',
    });
    return Post;
};