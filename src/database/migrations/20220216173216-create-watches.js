"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.createTable(
        "Watches",
        {
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
          diameter: Sequelize.INTEGER,
          price: Sequelize.INTEGER,
        },
        {
          modelName: "Watch",
        }
      ),
    ]);
  },

  async down() {
    throw new Error("Operation non supported");
  },
};
