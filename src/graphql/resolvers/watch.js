const db = require("../../database/models");

module.exports = {
    async getAllWatches(root, args, context) {
      return db.watch.findAll();
    },
};
