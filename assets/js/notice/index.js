//@flow
import type {Store} from 'redux';
import toastr from 'toastr';
import {messaging} from '../firebase';
import subscribe from '../feature/subscribe';
import listen from './listen';

export default function (store: Store<Object, Object>) {
  messaging.requestPermission()
    .then(() => navigator.serviceWorker.getRegistration())
    .then(registration => messaging.useServiceWorker(registration))
    .then(() => messaging.getToken())
    .then(token => subscribe(token, 'check-in'))
    .then(() => console.log('Start subscribe'))
    .then(listen(store, messaging))
    .then(() => toastr.success('Start listen for Push Notice'))
    .catch((e) => {
      console.trace(e);
      toastr.error('Fail to active push notice');
    });

  return store;
}