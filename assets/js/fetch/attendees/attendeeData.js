import {database} from '../../firebase';
import {importAttendeeData} from '../../action';

export default function (store) {
  database.ref('attendees').on('value', (snapshot) => {
    const action = importAttendeeData(snapshot.val());
    store.dispatch(action);
  });
}