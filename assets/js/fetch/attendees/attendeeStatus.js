import moment from 'moment';
import {database} from '../../firebase';
import {importAttendeeCheckin} from '../../action';

export default function (store) {
  const date = moment().format('YYYYMMDD');
  database.ref(`check/${date}`).on('value', (snapshot) => {
    const action = importAttendeeCheckin(snapshot.val());
    store.dispatch(action);
  });
}