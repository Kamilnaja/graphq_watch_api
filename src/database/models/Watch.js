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
      caseMaterial: Sequelize.ENUM('steel', 'plastic', 'silver', 'gold'),
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
