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
          caseMaterial: Sequelize.ENUM("steel", "plastic", "silver", "gold"),
          companyId: {
            type: Sequelize.INTEGER,
            references: {
              model: "Companies",
              key: "id",
              onDelete: "cascade",
              onUpdate: "cascade",
            },
          },
          diameter: Sequelize.INTEGER,
          price: Sequelize.INTEGER,
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
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
