import {database} from '../firebase';
import {userInfo} from '../action';

const DEFAULT_INFO = {
  team: 'Operation'
};

export default function (store, user) {
  const key = `/users/${user.uid}`;
  database.ref(key).on('value', (snapshot) => {
    let value = snapshot.val();
    if (value === null) {
      value = DEFAULT_INFO;
      database.ref(key).set(value);
    }
    const action = userInfo(value);
    store.dispatch(action);
  });
}