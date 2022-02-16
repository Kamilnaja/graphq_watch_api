"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert("Company", [
        {
          id: 1,
          name: "Rolex",
          country: "Switzerland",
        },
        {
          id: 2,
          name: "Omega",
          country: "Switzerland",
        },
        {
          id: 3,
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
