module.exports = `
  type Company {
    id: Int!
    name: String!
    country: String
    watches: [Watch]
  }
`;
