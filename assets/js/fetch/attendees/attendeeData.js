import {database} from '../../firebase';

const promise = new Promise((resolve) => {
  database.ref('attendees').once('value', snapshot => resolve(snapshot.val()));
})
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