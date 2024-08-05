const pool = require('../config/db');

module.exports = {
  createLog: (logData) => {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO logs SET ?',
        logData,
        (error, results) => {
          if (error) return reject(error);
          resolve(results.insertId);
        }
      );
    });
  },
  // Other CRUD operations...
};