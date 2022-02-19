const { makeExecutableSchema } = require("@graphql-tools/schema");
const Company = require("./company");
const Watch = require("./watch");

const Query = `
  type Query {
    watch: [Watch]
    company: [Company]
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [Company, Watch, Query]
});
