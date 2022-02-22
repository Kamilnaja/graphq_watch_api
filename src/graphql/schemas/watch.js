module.exports = `
  type Watch {
    id: Int!
    name: String!
    caseMaterial: String!
    companyId: Int
    company: Company
    diameter: Int!
    price: Int
  }
`;
