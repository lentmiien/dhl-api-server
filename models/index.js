const sequelize = require('../config/db');
const Order = require('./Order');
const Log = require('./Log');

// Add any associations here if needed
// For example:
// Order.hasMany(Log);
// Log.belongsTo(Order);

module.exports = {
  sequelize,
  Order,
  Log
};