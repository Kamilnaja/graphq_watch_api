getAllWatches = async (_, __, ctx) => {
  try {
    return await ctx.watch.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

getWatch = async (_, args, ctx) => {
  try {
    return await ctx.watch.findByPk(args.id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllWatches, getWatch };
