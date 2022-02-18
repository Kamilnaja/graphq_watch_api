module.exports = function (sequelize, Sequelize) {
  const Company = sequelize.define("Company", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    country: Sequelize.STRING,
  });

  Company.hasMany(models.Watch);
  return Company;
};
