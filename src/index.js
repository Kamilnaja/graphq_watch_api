const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas");
const { watches, companies } = require("./db");
const app = express();

var root = { watches: () => watches(), companies: () => companies() };

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("running on 3000");
});
