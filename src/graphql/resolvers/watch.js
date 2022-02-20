const db = require("../../database/models");

module.exports = {
  Query: {
    getAllWatches(root, args, context) {
      return db.watch.findAll();
    },
  },
};
