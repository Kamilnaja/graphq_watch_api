const { Watch } = require("../database/models/Watch");

module.exports = {
  Query: {
    async getAllWatches(root, args, context) {
      return Watch.findAll();
    },
  },
};
