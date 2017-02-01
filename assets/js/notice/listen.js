//@flow
import type {Store} from 'redux';
import type firebase from 'firebase/messaging';
import {noticeCheckIn} from '../redux/action';

export default function (store: Store<Object, Object>, messaging: firebase.Messaging) {
  return () => messaging.onMessage(payload => {
    const state = store.getState();
    if (state.localCheckIn.indexOf(state.id) !== -1) {
      return console.log('Already Check In');
    } else {
      return store.dispatch(noticeCheckIn(payload.data));
    }
  });
}