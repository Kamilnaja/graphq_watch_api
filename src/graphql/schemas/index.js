const { makeExecutableSchema } = require("@graphql-tools/schema");
const Company = require("./company");
const Watch = require("./watch");

const Query = `
  type Query {
    getAllWatches: [Watch]
    getAllCompanies: [Company]
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [Company, Watch, Query]
});
