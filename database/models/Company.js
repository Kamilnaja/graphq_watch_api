const { DataTypes } = require("sequelize");

module.exports = function (sequelize, Sequelize) {
  const Company = sequelize.define("Company", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    country: DataTypes.STRING,
  });

  Company.hasMany(models.Watch);
};
