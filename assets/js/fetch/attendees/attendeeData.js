import fetchJson from '../json';

const promise = fetchJson('/data/attendee.json')
  .then(function (data) {
    return Object.keys(data).map(function (id) {
      const attendee = data[id];
      return {
        id,
        name: attendee.name,
        ticket: attendee.ticket,
        type: attendee.type
      }
    });
  });

export default promise;