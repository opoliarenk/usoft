const Sequelize = require('sequelize');


const sequelize = new Sequelize("usoft", 'root', "smartucodelena", {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

module.exports = sequelize;