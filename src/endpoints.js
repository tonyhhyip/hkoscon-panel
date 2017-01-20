'use strict';

const express = require('express');
const checkIn = require('./handlers/checkin');
const router = express.Router();

router.post('/checkin/:id', function (req, res) {
  checkIn(req, res, req.params.id);
});

router.get('/attendee/check-in/:date?', function (req, res, next) {
  const moment = require('moment');
  const redis = require('./redis');
  const date = req.params.date || moment().format('YYYYMMDD');
  const client = redis.createClient(redis.config);

  client.smembersAsync(`attendee:${date}`)
    .then(function (reply){
      res.json(reply);
      res.end();
    })
    .catch(e => next(e))
});

router.get('/attendee/:attendee/status', function (req, res, next) {
  const moment = require('moment');
  const redis = require('./redis');
  const date = req.params.date || moment().format('YYYYMMDD');
  const client = redis.createClient(redis.config);
  client.sismemberAsync(`attendee:${date}`)
    .then(function (reply) {
      if (reply == 0) {
        res.end('not_in_venue');
      } else {
        res.end('check_in');
      }
    })
    .catch((e) => next(e));
});

module.exports = router;