module.exports = `
  type Query {
    getWatch(id: Int): Watch
    getAllWatches: [Watch]
    getCompany(id: Int): Company
    getAllCompanies: [Company]
  }

  type Mutation {
    createWatch(
      name: String, 
      caseMaterial: CaseMaterial, 
      companyId: Int, 
      diameter: Int, 
      price: Int): Watch
  }
`;
