const watchType = require("./watch");
const companyType = require("./company");
const { buildSchema } = require("graphql");

const rootType = buildSchema(`
  type Query {
    hello: String
  }
  type Mutation {
    root: String
  }
`);

module.exports = { rootType, watchType, companyType };
