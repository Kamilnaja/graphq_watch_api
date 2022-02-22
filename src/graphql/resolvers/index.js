const db = require("../../database/models");
const watch = require("../../graphql/resolvers/watch");
const company = require("../../graphql/resolvers/company");

const Query = {
  ...watch,
  ...company,
};

const Watch = {
  company: (watch) =>
    db.company.findByPk(watch.companyId, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    }),
};

const Company = {
  watches: (company) => {
    return db.watch.findAll({
      where: { companyId: company.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  },
};

module.exports = { Query, Watch, Company };
