const db = require("../../database/models");

const rootValue = {
  watch: async (root, args, context) => {
    try {
      return db.watch.findAll();
    } catch (err) {
      console.log(err);
    }
  },
  company: async (root, args, context) => {
    try {
      return db.company.findAll();
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = rootValue;
