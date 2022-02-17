const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas");
const resolvers = require("../graphql/resolvers");
const typeDefs = require("../graphql/schemas");
const context = require("../graphql/context");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    typeDefs,
    resolvers,
    context,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("running on 3000");
});
