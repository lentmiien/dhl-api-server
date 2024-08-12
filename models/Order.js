const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    commoditiesDescription: DataTypes.STRING,
    commoditiesCustomsValue: DataTypes.DECIMAL(10, 2),
    shippingCost: DataTypes.DECIMAL(10, 2),
    gstCost: DataTypes.DECIMAL(10, 2),
    invoiceDate: DataTypes.DATEONLY,
    invoiceNumber: DataTypes.STRING,
    packageWeight: DataTypes.DECIMAL(5, 2),
    packageLength: DataTypes.DECIMAL(5, 2),
    packageWidth: DataTypes.DECIMAL(5, 2),
    packageHeight: DataTypes.DECIMAL(5, 2),
    customerBarcode: DataTypes.STRING
  });

  return Order;
};