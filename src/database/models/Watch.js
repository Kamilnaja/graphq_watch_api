module.exports = function (sequelize, Sequelize) {
  return sequelize.define(
    "Watch",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      caseMaterial: Sequelize.STRING,
      companyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Company",
          key: "id",
          onDelete: "cascade",
          onUpdate: "cascade",
        },
      },
      diameter: Sequelize.INTEGER,
      price: Sequelize.INTEGER,
    },
    {
      modelName: "Watch",
    }
  );
};
