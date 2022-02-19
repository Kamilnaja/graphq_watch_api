const Company = require("../../database/models/Company");

module.exports = {
  async getAllCompanies(root, args, context) {
    return Company.findAll();
  },
};
