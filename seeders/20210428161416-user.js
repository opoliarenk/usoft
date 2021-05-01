'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
      login: 'lena',
      password: '$2a$10$FcO9PraFpsMeD7jm1K6JQegra/awlZa1EoZ9RtHNz5NHmXq2LlB9q',
      email: 'lenailoveyou11@gmail.com',
      fullName: 'Olena',
      confirmStr: 'confirmStrAdmin',
      role: 'admin',
      confirmed: true,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};