const { Company } = require("../database/models/Company");

module.exports = {
  Query: {
    async getAllWatches(root, args, context) {
      return Company.findAll();
    },
  },
};
