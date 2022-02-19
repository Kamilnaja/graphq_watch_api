const db = require("../../database/models");

module.exports = {
  getAllWatches: async function (root, args, context) {
    try {
      return db.watch.findAll();
    } catch (err) {
      console.log(err);
    }
  },
  getAllCompanies: async (root, args, context) => {
    try {
      return db.company.findAll();
    } catch (err) {
      console.log(err);
    }
  },
};
