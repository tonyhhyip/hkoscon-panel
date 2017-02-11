import moment from 'moment';
import {database} from '../../firebase';
import {importAttendeeCheckin, updateCheckIn} from '../../action';

export default function (store) {
  const date = moment().format('YYYYMMDD');
  const ref = database.ref(`checkIn/${date}`);

  ref.once('value', (snapshot) => {
    const action = importAttendeeCheckin(snapshot.val());
    store.dispatch(action);
  });

  ref.on('child_added', (data) => {
    const action = updateCheckIn(data.key, data.val());
    store.dispatch(action);
  });

  ref.on('child_changed', (data) => {
    const action = updateCheckIn(data.key, data.val());
    store.dispatch(action);
  });

  ref.on('child_removed', (data) => {
    const action = updateCheckIn(data.key, false);
    store.dispatch(action);
  })
}