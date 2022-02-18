const Watch = require("../../database/models/Watch")();

const rootValue = {
  hello: () => `Hello World`,
  watch: async (root, args, context) => {
    try {
      console.log(Watch);
      const watches = await Watch.findAll();
      return watches;
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = rootValue;
