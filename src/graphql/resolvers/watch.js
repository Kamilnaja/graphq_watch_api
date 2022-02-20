module.exports = async function (root, args, ctx) {
  try {
    return ctx.watch.findAll();
  } catch (err) {
    console.log(err);
  }
};
