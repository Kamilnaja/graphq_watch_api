const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query {
  watches: [Watch]
  companies: [Company]
}

type Watch {
  id: ID!
  company: Company!
  name: String
  diameter: Float
  caseMaterial: CaseMaterial
  type: WatchType
  price: Float
}

type Company {
  id: ID!
  name: String
  watches: [Watch]
  country: String
}

enum CaseMaterial {
  STEEL
  PLASTIC
}

enum WatchType {
  SPORT
  DIVER
  MILITARY
}
`);

module.exports = schema;
