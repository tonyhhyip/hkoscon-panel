//@flow
'use strict';

const Pool = require('pg').native.Pool;

const config = {
  user: process.env.DB_USER || 'hkoscon',
  password: process.env.DB_PASSWORD || 'hkoscon',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'hkoscon',
  max: 10
};

const pool = new Pool(config);

module.exports = function getConnection(): Promise<Object> {
  return new Promise(function (resolve, reject) {
    pool.connect(function (err, client, done) {
      if (err) {
        reject(err);
      } else {
        resolve({client, done});
      }
    });
  });
};