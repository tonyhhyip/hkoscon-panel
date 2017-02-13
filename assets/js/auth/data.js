//@flow
import type {Store} from 'redux';
import {database} from '../firebase';
import {userInfo} from '../action';
import {DEFAULT_INFO} from '../constants';

export default function (store: Store<Object, Object>, user: Object) {
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