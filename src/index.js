const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schemas/");
const db = require("./database/models");
const app = express();
const port = process.env.port || 4000;
const resolvers = require("./graphql/resolvers");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    resolvers,
    context: db,
    graphiql: true,
    logger: {
      log: console.log,
    },
  })
);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
