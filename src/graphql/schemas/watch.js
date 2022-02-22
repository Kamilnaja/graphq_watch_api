module.exports = `
  enum CaseMaterial {
    steel
    plastic
    silver
    gold
  }
  
  type Watch {
    id: Int!
    name: String!
    caseMaterial: CaseMaterial
    companyId: Int
    company: Company
    diameter: Int!
    price: Int
  }
`;
