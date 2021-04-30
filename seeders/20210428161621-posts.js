'use strict';
const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [
      {
        author: 2,
        title: 'recovery of multiple downloaded image in formData with express',
        publishDate: 1,
        content: 'В моем приложении node.js у меня есть несколько моделей, в которых я хочу определить столбцы типа TIMESTAMP , включая временные метки по умолчанию created_at и updated_at .\n' +
            '\n' +
            'Согласно документации sequelize.js\', существует только тип данных DATE . Он создает DATETIME столбца в MySQL.\n' +
            'var User = sequelize.define(\'User\', {\n' +
            '... // columns\n' +
            'last_login: {\n' +
            '            type: DataTypes.DATE,\n' +
            '            allowNull: false\n' +
            '        },\n' +
            '...\n' +
            '}, { // options\n' +
            '        timestamps: true\n' +
            '});\n' +
            'Можно ли вместо этого сгенерировать TIMESTAMP столбца?',
      },
      {
        author: 3,
        title: 'sequelize.js TIMESTAMP не DATETIME',
        publishDate: 1,
        content: 'В моем приложении node.js у меня есть несколько моделей, в которых я хочу определить столбцы типа TIMESTAMP , включая временные метки по умолчанию created_at и updated_at .\n' +
            '\n' +
            'Согласно документации sequelize.js\', существует только тип данных DATE . Он создает DATETIME столбца в MySQL.\n' +
            '\n' +
            'Пример:\n' +
            '\n' +
            'var User = sequelize.define(\'User\', {\n' +
            '... // columns\n' +
            'last_login: {\n' +
            '            type: DataTypes.DATE,\n' +
            '            allowNull: false\n' +
            '        },\n' +
            '...\n' +
            '}, { // options\n' +
            '        timestamps: true\n' +
            '});\n' +
            'Можно ли вместо этого сгенерировать TIMESTAMP столбца?',
      },
      {
        author: 4,
        title: 'Как проверить, содержит ли строка определенное слово?',
        publishDate: 1,
        content: 'Считать:\n' +
            '\n' +
            '$a = \'How are you?\';\n' +
            '\n' +
            'if ($a contains \'are\')\n' +
            '    echo \'true\';\n' +
            'Предположим, у меня есть приведенный выше код, Как правильно написать оператор if ($a contains \'are\') ?',
      },
      {
        author: 5,
        title: 'Как я могу получить PHP ошибок для отображения?',
        publishDate: 1,
        content: 'Я проверил свой файл PHP ini ( php.ini ) и display_errors установлен, а также отчет об ошибках E_ALL . Я перезапустил свой Apache webserver.\n' +
            '\n' +
            'Я даже поместил эти строки в верхней части своего скрипта, и он даже не улавливает простых ошибок синтаксического анализа. Например, я объявляю переменные с "$" и не закрываю операторы ";" . Но все мои скрипты показывают пустую страницу об этих ошибках, но я действительно хочу видеть ошибки в выводе моего браузера.\n' +
            '\n' +
            'error_reporting(E_ALL);\n' +
            'ini_set(\'display_errors\', 1);\n' +
            'Что же остается делать?',
        createdAt: moment.utc().format('2021-03-05 05:02:11'),
        updatedAt: moment.utc().format('2021-02-05 05:02:11')
      },
      {
        author: 5,
        title: 'Как мне обновить Node.js?',
        publishDate: 1,
        content: 'Я сделал следующее, Чтобы обновить свой npm:\n' +
            '\n' +
            'npm update npm -g\n' +
            'Но я понятия не имею, как обновить Node.js. Есть предложения? (Я использую Node.js 0.4.1 и хочу обновить его до Node.js 0.6.1.)',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};