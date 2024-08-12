const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    commodityCode: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    unitPrice: DataTypes.DECIMAL(10, 2),
    weight: DataTypes.DECIMAL(5, 3),
    gstCharged: DataTypes.BOOLEAN
  });

  return Item;
};