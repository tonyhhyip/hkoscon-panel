'use strict';

const moment = require('moment');
const debug = require('debug')('handle:checkin');
const firebase = require('../firebase');

const db = firebase.database();

module.exports = function (req, res, id) {
  const now = moment();
  const date = now.format('YYYYMMDD');
  res.status(200);
  db.ref(`checkin/${date}/${id}`).set(now.format());
  // sendNotice();
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
      'Authorization': `key=${process.env.FIREBASE_MESSAGE_SERVER_KEY}`
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