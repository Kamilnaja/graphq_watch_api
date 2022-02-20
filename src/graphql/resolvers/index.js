const watch = require("./watch");
const company = require("./company");

module.exports = {
  Query: {
    getAllWatches: watch,
    getAllCompanies: company,
  },
};
