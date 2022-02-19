"use strict";

module.exports = {
  async up(queryInterface) {
    return Promise.all([
      queryInterface.bulkInsert("companies", [
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
