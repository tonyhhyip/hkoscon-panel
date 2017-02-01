//@flow
import type {Store} from 'redux';
import {NOTICE_CHECK_IN} from '../action';

export default function checkInNotice(store: Store<Object, Object>) {
  return (next: Function) => (action: Object) => {
    if (action.type !== NOTICE_CHECK_IN) {
      return next(action);
    }
    const {attendees} = store.getState();
    const notYetCheckIn = attendees.some(attendee => attendee.id === action.id && !attendee.checkIn);
    const result = next(action);
    const state = store.getState();
    if (notYetCheckIn && state.localCheckIn.indexOf(action.id) === -1) {
      console.info('Check in notice');
      navigator.serviceWorker.getRegistration()
        .then((registration) => {
          const {data} = action;
          const title = `${data.type} attendee ${data.name} has just checked in`;
          return registration.showNotification(title, {
            icon: 'https://hkoscon.org/logo.png'
          });
        })
    }
    return result;
  }
}