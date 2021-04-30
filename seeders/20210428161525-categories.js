'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('categories', [
      {
        title: 'PHP',
        description: 'someThing'
      },
      {
        title: 'JavaScript',
        description: 'someThing'
      },
      {
        title: 'GoLang',
        description: 'someThing'
      },
      {
        title: 'Linux',
        description: 'someThing'
      },
      {
        title: 'Servers',
        description: 'someThing'
      },
      {
        title: 'C++',
        description: 'someThing'
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};