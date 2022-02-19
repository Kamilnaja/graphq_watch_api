const db = require("../../database/models");

const rootValue = {
  hello: () => `Hello World`,
  watch: async (root, args, context) => {
    try {
      return db.watch.findAll();
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = rootValue;
