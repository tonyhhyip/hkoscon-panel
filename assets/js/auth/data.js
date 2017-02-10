import {database} from '../firebase';
import {userInfo} from '../action';

export default function (store, user) {
  database.ref(`/users/${user.uid}`).on('value', (snapshot) => {
    const action = userInfo(snapshot.val());
    store.dispatch(action);
  });
}