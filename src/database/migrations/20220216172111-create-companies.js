"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.createTable("Companies", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        country: Sequelize.STRING,
      }),
    ]);
  },

  async down() {
    throw new Error("Operation non supported");
  },
};
