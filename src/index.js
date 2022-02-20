const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schemas/");
const rootValue = require("./graphql/resolvers");
const context = require("./graphql/context");
const db = require("./database/models");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    context: db,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("running on 4000");
});
