module.exports = function (sequelize, Sequelize) {
  const Watch = db.define("Watch", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    caseMaterial: DataTypes.STRING,
    companyId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Company",
        key: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },
    diameter: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  });

  Watch.hasOne(db.Company);
};
