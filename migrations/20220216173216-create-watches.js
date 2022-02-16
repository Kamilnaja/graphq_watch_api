"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.createTable("Watch", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        caseMaterial: Sequelize.STRING,
        companyId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Company",
            key: "id",
            onDelete: "cascade",
            onUpdate: "cascade",
          },
        },
      }),
    ]);
  },

  async down() {
    throw new Error("Operation non supported");
  },
};
