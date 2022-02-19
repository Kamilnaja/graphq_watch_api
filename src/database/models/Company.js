module.exports = function (sequelize, Sequelize) {
  return sequelize.define(
    "Company",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      modelName: "Company",
    }
  );
};
