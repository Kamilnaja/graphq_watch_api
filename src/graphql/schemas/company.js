const { buildSchema } = require("graphql");

const company = buildSchema(`
  type Company {
    id: Int!
    name: String!
    country: String
  }
`);

module.exports = company;
