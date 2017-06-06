'use strict';
const url = require('url');

const functions = require('firebase-functions');
const admin = require('firebase-admin');

const request = require('request-promise');
const moment = require('moment-timezone');

admin.initializeApp(functions.config().firebase);

const TIMEZONE = 'Asia/Hong_Kong';

exports.sendNotice = functions.database.ref('/checkIn/{date}/{attendee}').onWrite(event => {
  const time = moment(event.data.val()).tz(TIMEZONE).format('HH:mm:ss');
  const attendee = event.params.attendee;
  const ref = admin.database().ref('/attendees');
  return new Promise((resolve, reject) => ref.once('value', snapshot => resolve(snapshot.val()), e => reject(e)))
    .then(attendees => attendees[Object.keys(attendees).find(key => attendees[key].ticket === attendee)])
    .then(data => {
      if (data) {
        return {
          data: Object.assign({}, data, { checkIn: time }),
          notification: {
            title: `${data.type} attendee ${data.name} has checked in on ${time}`,
          },
        };
      } else {
        throw new Error('Attendee data not found');
      }
    })
    .then(message => admin.messaging().sendToTopic('check-in', message))
    .then(response => console.log('Success send notice', response))
    .catch(e => console.error(e));
});

exports.eventbriteWebhookCheckIn = functions.https.onRequest((req, res) => {
  const path = url.parse(req.body.api_url).pathname;
  let id = null;
  const pieces = path.replace(/^\/|\/$/, '').split('/');
  while (!id) {
    id = pieces.pop();
  }
  if (req.method !== 'POST') {
    res.status(405).end();
  } else if (req.body.config.action === 'test') {
    res.status(200).end();
  } else if (!req.get('User-Agent').startsWith('Eventbrite')) {
    console.error('Not correct user agent: ', req.get('User-Agent'));
    res.status(403).end();
  } else if (req.get('X-Eventbrite-Event') !== 'barcode.checked_in') {
    console.error('Incorrect event: ', req.get('X-Eventbrite-Event'));
    res.status(400).end();
  } else {
    const now = moment().tz(TIMEZONE);
    const date = now.format('YYYYMMDD');
    return admin.database().ref(`/checkin/${date}/${id}`)
      .set(now.format())
      .then(() => res.status(200).end());
  }
});

function loadAttendee(attendees, uri, token, continuation) {
  const ref = admin.database().ref('/attendees');
  return request({
    uri,
    qs: continuation ? { token, continuation } : { token },
  })
    .then(body => JSON.parse(body))
    .then((body) => {
      body.attendees.forEach((attendee) => {
        const exists = !!attendees.find(a => a.ticket === attendee.order_id);
        if (!exists) {
          const newRef = ref.push();
          newRef.set({
            id: attendee.id,
            type: attendee.ticket_class_name,
            ticket: attendee.order_id,
            name: attendee.profile.name,
          });
        }
      });
      if ('continuation' in body.pagination) {
        return loadAttendee(attendees, uri, token, body.pagination.continuation);
      }
      return null;
    })
    .catch(console.error)
}

exports.syncAttendee = functions.https.onRequest((req, res) => {
  if (req.method !== 'PUT' && req.get('X-Token') !== functions.config().access.attendee) {
    res.status(401).end();
    return;
  }

  const uri = `https://www.eventbriteapi.com/v3/events/${functions.config().event.id}/attendees`;
  const token = functions.config().event.token;
  return new Promise((resolve) => {
    admin.database().ref(`/attendees`).on('value', snapshot => {
      const val = snapshot.val();
      const attendees = Object.keys(val).map(key => val[key]);
      resolve(attendees);
    });
  })
    .then(attendees => loadAttendee(attendees, uri, token, false))
    .then(() => res.status(200).end())
    .catch(e => {
      res.status(500).json(e).end();
      console.error(e)
    });
});
