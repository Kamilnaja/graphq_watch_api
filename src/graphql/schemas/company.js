const { gql } = require("apollo-server");

module.exports = gql`
  type Company {
    id: Int!
    name: String!
    country: String
  }
`;
