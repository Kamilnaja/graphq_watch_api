const { gql } = require("apollo-server");
const watchType = require("./watch");
const companyType = require("./company");

const rootType = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

module.exports = [rootType, watchType, companyType];
