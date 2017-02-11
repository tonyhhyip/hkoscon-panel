import moment from 'moment';
import {database} from '../../firebase';
import {importAttendeeCheckin, updateCheckIn} from '../../action';

export default function (store) {
  const date = moment().format('YYYYMMDD');
  const key = `checkIn/${date}`;
  database.ref(key).once('value', (snapshot) => {
    const action = importAttendeeCheckin(snapshot.val());
    store.dispatch(action);
  });
  database.ref(key).on('child_added', (data) => {
    const action = updateCheckIn(data.key, data.val());
    store.dispatch(action);
  });
  database.ref(key).on('child_changed', (data) => {
    const action = updateCheckIn(data.key, data.val());
    store.dispatch(action);
  });
  database.ref(key).on('child_removed', (data) => {
    const action = updateCheckIn(data.key, false);
    store.dispatch(action);
  })
}