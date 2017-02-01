'use strict';

const moment = require('moment');
const debug = require('debug')('handle:checkin');
const redis = require('../redis');
const attendees = require('../attendees');
const {iterListeners} = require('../sse');

module.exports = function (req, res, id) {
  const client = redis.createClient(redis.config);
  const date = moment().format('YYYYMMDD');
  if (id in attendees) {
    res.status(200);
    const {type, ticket, name} = attendees[id];
    client.saddAsync(`attendee:${date}`, id)
      .then(function () {
        return client.hsetAsync(`checkin:${id}`, date, moment().unix());
      })
      .then(function () {
        sendNotice({id, type, ticket, name});
        iterListeners(function (listener) {
          listener.sendEvent('check-in', {id, type, ticket, name});
        });
      });
  } else {
    res.status(404);
  }
  res.end();
};

function sendNotice(attendee) {
  debug('Send to Notice');
  const request = require('request-promise');
  const uri = 'https://fcm.googleapis.com/fcm/send';
  request({
    uri,
    method: 'POST',
    body: {
      data: attendee,
      to: '/topics/check-in'
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `key=${process.env.FIREBAE_MESSAGE_SERVER_KEY}`
    },
    json: true
  })
    .then((body) => {
      debug('Response on Send message to channel: %o', body);
      if ('message_id' in body) {
        debug('Success Send Push');
      } else {
        debug('Fail to send push');
      }
    })
}