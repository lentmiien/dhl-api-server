const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ShippingConfig = sequelize.define('ShippingConfig', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    configType: {
      type: DataTypes.ENUM('all', 'account_specific'),
      allowNull: false
    },
    configKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    configValue: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return ShippingConfig;
};