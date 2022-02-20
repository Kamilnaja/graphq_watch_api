getAllCompanies = async (root, args, ctx) => {
  try {
    return ctx.company.findAll({
      attributes: ['id', 'name', 'country']
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllCompanies };
