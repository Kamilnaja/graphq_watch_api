getAllCompanies = async (_, __, ctx) => {
  try {
    return await ctx.company.findAll({
      exclude: ["createdAt", "updatedAt"],
    });
  } catch (err) {
    console.log(err);
  }
};

getCompany = async (_, args, ctx) => {
  try {
    return await ctx.company.findByPk(args.id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllCompanies, getCompany };
