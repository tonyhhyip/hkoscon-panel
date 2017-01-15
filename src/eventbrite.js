//@flow
'use strict';
const url = require('url');
const db = require('./db');

module.exports = function webhook(listeners: Set<Sse>) {
  return function (req: Restify$Request, res: Restify$Response) {
    res.status(200);
    res.end();
    const path = url.parse(req.params.api_url).pathname || '';
    const id = path.replace(/^\/|\/$/, '').split('/').pop();
    db()
      .then(function ({client, done}) {
        return new Promise(function (resolve, reject) {
          const sql = 'SELECT ticket_id AS id, ticket_type, attendee_name AS name FROM attendees WHERE attendee_id = $1 LIMIT 1';
          client.query(sql, [id.trim()], function (err, result) {
            if (err) {
              reject(err);
            } else {
              resolve({result, done});
            }
          })
        });
      })
      .then(function ({result, done}) {
        if (result.rows.length === 1) {
          const data = result.rows[0];
          emitEvent(listeners, data);
        }
        done();
      });
  }
};

type EventData = {
  id: string,
  name: string,
  ticket_type: string
}

function emitEvent(listeners: Set<Sse>, data: EventData) {
  const send = {
    id: data.id,
    name: data.name,
    ticket: data.ticket_type
  };
  listeners.forEach((listener) => {
    listener.sendEvent('check_in', send);
  });
}