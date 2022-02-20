const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schemas/");
const db = require("./database/models");
const app = express();
const port = process.env.port || 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    context: db,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
