//@flow
import type {Store} from 'redux';
import {NOTICE_CHECK_IN} from '../action';

export default function checkInNotice(store: Store<Object, Object>) {
  return (next: Function) => (action: Object) => {
    const result = next(action);
    const state = store.getState();
    console.info('Check in notice');
    if (action.type === NOTICE_CHECK_IN && state.localCheckIn.indexOf(action.data.id) === -1) {
      navigator.serviceWorker.getRegistration()
        .then((registration) => {
          const {data} = action;
          const title = `${data.type} ${data.name} Check In`;
          return registration.showNotification(title, {
            icon: 'https://hkoscon.org/logo.png'
          });
        })
    }
    return result;
  }
}