const watch = require("./watch");
const company = require("./company");

module.exports = {
  Query: {
    getAllWatches: watch.getAllWatches,
    getAllCompanies: company.getAllCompanies,
  },
};
