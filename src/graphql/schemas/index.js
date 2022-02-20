const { makeExecutableSchema } = require("@graphql-tools/schema");
const Company = require("./company");
const Watch = require("./watch");
const resolvers = require("./../resolvers");
const Query = require("./query");

module.exports = makeExecutableSchema({
  typeDefs: [Company, Watch, Query],
  resolvers,
});
