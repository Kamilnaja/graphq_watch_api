var { buildSchema } = require("graphql");

const watch = buildSchema(`
  
  type Query {
    getAllWatches: [Watch!]
  }
`);

module.exports = watch;
