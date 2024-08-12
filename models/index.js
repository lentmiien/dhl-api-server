const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  host: config.db.host,
  dialect: 'mysql'
});

const Customer = require('./Customer')(sequelize);
const Order = require('./Order')(sequelize);
const Item = require('./Item')(sequelize);
const ShippingConfig = require('./ShippingConfig')(sequelize);

// Define relationships
Customer.hasMany(Order);
Order.belongsTo(Customer);

Order.hasMany(Item);
Item.belongsTo(Order);

module.exports = {
  sequelize,
  Customer,
  Order,
  Item,
  ShippingConfig
};