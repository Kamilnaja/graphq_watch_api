"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert("Company", [
        {
          name: "Rolex",
          country: "Switzerland",
        },
        {
          name: "Omega",
          country: "Switzerland",
        },
        {
          name: "JLC",
          country: "Switzerland",
        },
      ]),
    ]);
  },

  async down() {
    throw new Error("Operation not supported");
  },
};
