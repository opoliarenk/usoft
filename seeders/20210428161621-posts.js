'use strict';
const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [
      {
        author: 2,
        title: 'recovery of multiple downloaded image in formData with express',
        publishDate: moment.utc().format('2021-03-05 05:02:11'),
        content: 'В моем приложении node.js у меня есть несколько моделей, в которых я',
      },
      {
        author: 3,
        title: 'sequelize.js TIMESTAMP не DATETIME',
        publishDate: moment.utc().format('2021-03-05 05:02:11'),
        content: 'В моем приложении node.js у меня есть несколько моделей, в которых я хочу определить столбцы типа TIMESTAMP , включая временные метки по умолчанию created_at и updated_at .\n',
      },
      {
        author: 4,
        title: 'Как проверить, содержит ли строка определенное слово?',
        publishDate: moment.utc().format('2021-03-05 05:02:11'),
        content: 'Считать:\n',
      },
      {
        author: 5,
        title: 'Как я могу получить PHP ошибок для отображения?',
        publishDate: moment.utc().format('2021-03-05 05:02:11'),
        content: 'Я проверил свой файл PHP ini ( php.ini ) и display_errors установлен, а также отчет об ошибках E_ALL . Я перезапустил свой Apache webserver.\n',
      },
      {
        author: 5,
        title: 'Как мне обновить Node.js?',
        publishDate: moment.utc().format('2021-03-05 05:02:11'),
        content: 'Я сделал следующее, Чтобы обновить свой npm:\n',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};