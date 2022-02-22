const db = require("../../database/models");
const watch = require("../../graphql/resolvers/watch");
const company = require("../../graphql/resolvers/company");

const Query = {
  ...watch,
  ...company,
};

const Watch = {
  company: (watch) => db.company.findByPk(watch.companyId),
};

const Company = {
  // todo - implement
};

module.exports = { Query, Watch, Company };
