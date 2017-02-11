import moment from 'moment';
import {database} from '../../firebase';
import {importAttendeeCheckin, updateCheckIn} from '../../action';

export default function (store) {
  const date = moment().format('YYYYMMDD');
  database.ref(`checkIn/${date}`).once('value', (snapshot) => {
    const action = importAttendeeCheckin(snapshot.val());
    store.dispatch(action);
  });
  database.ref(`checkIn/${date}`).on('child_added', (data) => {
    const action = updateCheckIn(data.key, data.val());
    store.dispatch(action);
  })
}