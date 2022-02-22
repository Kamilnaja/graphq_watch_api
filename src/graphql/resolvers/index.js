const db = require("../../database/models");
const watch = require("./watchResolver");
const company = require("./companyResolver");

const Query = {
  ...watch,
  ...company,
};

const Mutation = {
  
}

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
