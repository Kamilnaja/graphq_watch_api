getAllWatches = async (root, args, ctx) => {
  try {
    return ctx.watch.findAll({
      attributes: ["id", "name", "caseMaterial", "companyId", "diameter", "price"],
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllWatches };
