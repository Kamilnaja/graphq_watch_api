"use strict";

module.exports = {
  async up(queryInterface) {
    return Promise.all([
      queryInterface.bulkInsert("Watches", [
        {
          name: "Rolex Submariner Hulk",
          diameter: 40,
          caseMaterial: "steel",
          companyId: 1,
          price: 10000,
        },
        {
          name: "Omega Aqua Terra",
          diameter: 38,
          caseMaterial: "steel",
          companyId: 2,
          price: 7000,
        },
        {
          name: "JLC Reverso Grande Date",
          diameter: 30,
          caseMaterial: "steel",
          companyId: 3,
          price: 9000,
        },
      ]),
    ]);
  },

  async down() {
    throw new Error("Operation not supported");
  },
};
