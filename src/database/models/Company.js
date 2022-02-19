module.exports = function (sequelize, Sequelize) {
  return sequelize.define(
    "Company",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      country: Sequelize.STRING,
    },
    {
      modelName: "Company",
    }
  );
};
