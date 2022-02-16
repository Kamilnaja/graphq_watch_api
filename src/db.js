const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../db.sqlite",
});

async function connectDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (e) {
    console.error("Unable to connect to the db:", e);
  }
}
connectDb();

const watches = () => [
  {
    id: 1,
    name: "Rolex Submariner Hulk",
    diameter: 40,
    caseMaterial: "STEEL",
    company: {
      id: 1,
      name: "Rolex",
      country: "Switzerland",
    },
    price: 10000,
  },
  {
    id: 2,
    name: "Hamilton Khaki Field",
    diameter: 38,
    caseMaterial: "STEEL",
    company: {
      id: 2,
      name: "Hamilton",
      country: "Switzerland",
    },
    price: 1000,
  },
  {
    id: 3,
    name: "Omega Aqua Terra",
    diameter: 38,
    caseMaterial: "STEEL",
    company: {
      id: 3,
      name: "Omega",
      country: "Switzerland",
    },
    price: 15000,
  },
];

const companies = () => [
  {
    id: 1,
    name: "Rolex",
    country: "Switzerland",
  },
  {
    id: 3,
    name: "Omega",
    country: "Switzerland",
  },
  {
    id: 3,
    name: "Omega",
    country: "Switzerland",
  },
];

module.exports = { watches, companies };
