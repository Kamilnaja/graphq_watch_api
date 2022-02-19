const gql = require("graphql-tag");
const { buildASTSchema } = require("graphql");

const schema = buildASTSchema(gql`
  type Query {
    watch: [Watch]
    company: [Company]
  }

  type Watch {
    id: Int!
    name: String!
    caseMaterial: String!
    companyId: Int!
    diameter: Int!
    price: Int
  }

  type Company {
    id: Int!
    name: String!
    country: String
  }
`);

module.exports = schema;
