const Sequelize = require('sequelize');


const sequelize = new Sequelize("usoftBackend", "root", "securepass", {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

module.exports = sequelize;