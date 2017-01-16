'use strict';

const pg = require('pg');
const debug = require('debug')('db');

const config = {
  user: process.env.DB_USER || 'hkoscon',
  password: process.env.DB_PASSWORD || 'hkoscon',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'hkoscon',
  max: 10
};

const pool = new pg.Pool(config);

module.exports = function getConnection() {
  return new Promise(function (resolve, reject) {
    pool.connect(function (err, client, done) {
      if (err) {
        debug('Error: %s', err);
        reject(err);
      } else if (!client) {
        reject(new Error('No Client exists'));
      } else {
        const rollback = function () {
          debug('Rollback');
          client.query('ROLLBACK', [], (e) => {
            if (e) debug('Rollback Error: %s', e);
            done(e);
          });
        };
        const commit = function () {
          debug('Commit');
          client.query('COMMIT', (e) => {
            if (e) debug('Commit Error: %s', e);
            done(e);
          });
        };
        client.startTransaction = function () {
          return new Promise((resolve, reject) => {
            client.query('BEGIN', [], (e) => {
              if (e) {
                debug('Fail to start transaction: %s', e);
                reject(e);
              } else {
                debug('Start Transaction');
                resolve({commit, rollback});
              }
            })
          });
        };
        resolve({client, done});
      }
    });
  });
};