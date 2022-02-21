getAllCompanies = async (_, __, ctx) => {
  try {
    return ctx.company.findAll({
      attributes: ["id", "name", "country"],
    });
  } catch (err) {
    console.log(err);
  }
};

getCompany = async (_, args, ctx) => {
  try {
    return ctx.company.findByPk(args.id, {
      attributes: ["id", "name", "country"],
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllCompanies, getCompany };
