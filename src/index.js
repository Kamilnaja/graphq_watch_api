const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schemas/testSchema");
const rootValue = require("./graphql/resolvers/testResolver");
const context = require("./graphql/context");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    context,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("running on 4000");
});
