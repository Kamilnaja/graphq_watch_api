const watch = require("./watch");
const company = require("./company");
const { getWatch, getAllWatches } = watch;
const { getCompany, getAllCompanies } = company;

module.exports = {
  Query: {
    getWatch,
    getAllWatches,
    getCompany,
    getAllCompanies,
  },
};
