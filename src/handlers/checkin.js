'use strict';

const moment = require('moment');
const redis = require('../redis');
const attendees = require('../attendees');
const {iterListeners} = require('../sse');

module.exports = function (req, res, id) {
  const client = redis.createClient(redis.config);
  const date = moment().format('YYYY-MM-DD');
  if (id in attendees) {
    res.status(200);
    const {type, ticket, name} = attendees[id];
    client.saddAsync(`attendee:${date}`, id)
      .then(function () {
        return client.hsetAsync(`checkin:${id}`, date, moment().unix());
      })
      .then(function () {
        iterListeners(function (listener) {
          listener.sendEvent('check-in', {id, type, ticket, name});
        });
      });
  } else {
    res.status(404);
  }
  res.end();
} ;