module.exports = async (root, args, ctx) => {
  try {
    return ctx.company.findAll();
  } catch (err) {
    console.log(err);
  }
};
