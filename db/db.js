const Sequelize = require('sequelize');

const sequelize = new Sequelize("usoft", 'opoliarenk', 'securepass', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

module.exports = sequelize;