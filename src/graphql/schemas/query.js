module.exports = `
  type Query {
    getWatch(id: Int): Watch
    getAllWatches: [Watch]
    getCompany(id: Int): Company
    getAllCompanies: [Company]
  }
`;
