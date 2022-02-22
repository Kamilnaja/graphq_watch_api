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
  watches: (company) => {
    return db.watch.findAll({ where: { 'companyId': company.id } });
  }
};

module.exports = { Query, Watch, Company };
