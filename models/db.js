const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
});

exports.db_query = (query, params = []) => {
  const dbPromise = new Promise((resolve, reject) => {
    pool.query(query, params, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
  return dbPromise.then((r) => r).catch((err) => err);
};
