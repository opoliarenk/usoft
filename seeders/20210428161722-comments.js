'use strict';
const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [
      {
        content: 'Idont know1',
        postId: 1,
        author: 3,
        publishDate: moment.utc().format('2021-03-11 17:02:11'),
      },
      {
        content: 'Idont know2',
        postId: 1,
        author: 5,
        publishDate: moment.utc().format('2021-03-11 17:02:11'),
      },
      {
        content: 'Idont know3',
        postId: 3,
        author: 2,
        publishDate: moment.utc().format('2021-03-11 17:02:11'),
      },
      {
        content: 'Idont know4',
        postId: 2,
        author: 1,
        publishDate: moment.utc().format('2021-03-11 17:02:11'),
      },
      {
        content: 'Idont know5',
        postId: 2,
        author: 3,
        publishDate: moment.utc().format('2021-03-11 17:02:11'),
      },
      {
        content: 'Idont know5',
        postId: 1,
        author: 2,
        publishDate: moment.utc().format('2021-03-11 17:02:11'),
      },
      {
        content: 'Idont know6',
        postId: 2,
        author: 1,
        publishDate: moment.utc().format('2021-03-11 17:02:11'),
      },
      {
        content: 'Idont know7',
        postId: 4,
        author: 5,
        publishDate: moment.utc().format('2021-03-11 17:02:11'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
  }
};