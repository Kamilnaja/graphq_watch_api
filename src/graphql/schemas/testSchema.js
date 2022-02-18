const gql = require("graphql-tag");
const { buildASTSchema } = require("graphql");

const schema = buildASTSchema(gql`
  type Query {
    watch: [Watch]
  }

  type Watch {
    id: Int!
    name: String!
    caseMaterial: String!
    companyId: Int!
    diameter: Int!
    price: Int
  }
`);

module.exports = schema;
