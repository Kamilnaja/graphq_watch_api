const { gql } = require("apollo-server");
module.exports = gql`
  type Watch {
    id: Int!
    name: String!
    caseMaterial: String!
    companyId: Company!
    diameter: Int!
    price: Int
  }
`;
