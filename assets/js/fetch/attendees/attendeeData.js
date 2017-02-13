//@flow
import type {Store} from 'redux';
import {database} from '../../firebase';
import {importAttendeeData} from '../../action';

export default function (store: Store<Object, Object>) {
  database.ref('attendees').on('value', (snapshot) => {
    const action = importAttendeeData(snapshot.val());
    store.dispatch(action);
  });
}