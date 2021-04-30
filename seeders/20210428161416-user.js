'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
      login: 'opoliarenk',
      password: '$2a$12$tWiUQrUvQ7gC2jMnF16f4ehJRllJDwqE7kgtCqR6dmcaZBH1E3BhS',
      email: 'lenailoveyou11@gmail.com',
      fullName: 'Olena',
      confirmStr: 'conddd',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};