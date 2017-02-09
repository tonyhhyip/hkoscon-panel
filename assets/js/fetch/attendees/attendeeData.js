import {database} from '../../firebase';

const promise = new Promise((resolve) => {
  database.ref('attendees').once('value', snapshot => resolve(snapshot.val()));
});

export default promise;