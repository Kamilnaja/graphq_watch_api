getAllWatches = async (_, __, ctx) => {
  try {
    return ctx.watch.findAll({
      attributes: [
        "id",
        "name",
        "caseMaterial",
        "companyId",
        "diameter",
        "price",
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

getWatch = async (_, args, ctx) => {
  try {
    return ctx.watch.findByPk(args.id, {
      attributes: [
        "id",
        "name",
        "caseMaterial",
        "companyId",
        "diameter",
        "price",
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllWatches, getWatch };
