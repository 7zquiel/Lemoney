'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('accounts', {
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      initialBalance: {
        type: Sequelize.STRING
      },
      accountType: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('accounts');
  }
};
