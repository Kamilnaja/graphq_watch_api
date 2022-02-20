module.exports = {
  Query: {
    getAllWatches: async function (root, args, ctx) {
      try {
        return ctx.watch.findAll();
      } catch (err) {
        console.log(err);
      }
    },
    getAllCompanies: async (root, args, ctx) => {
      try {
        return ctx.company.findAll();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
