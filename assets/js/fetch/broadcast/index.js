//@flow
import type {Store} from 'redux';
import { database } from '../../firebase';
import { importBroadcast, addBroadcast } from '../../action';

export default function (store: Store<Object, Object>) {
  const ref = database.ref('broadcast').orderByChild('time');

  ref.limitToFirst(30).once('value', (snapshot) => {
    const action = importBroadcast(snapshot.val());
    store.dispatch(action);
  });

  ref.on('child_added', (data) => {
    const action = addBroadcast(data.val());
    store.dispatch(action);
  });
}