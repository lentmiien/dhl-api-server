const pool = require('../config/db');

module.exports = {
  createOrder: (orderData) => {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO orders SET ?',
        orderData,
        (error, results) => {
          if (error) return reject(error);
          resolve(results.insertId);
        }
      );
    });
  },
  // Other CRUD operations...
};