//@flow
import type {Store} from 'redux';
import toastr from 'toastr';
import messaging from './messaging';
import subscribe from './subscribe';
import listen from './listen';

export default function (store: Store<Object, Object>) {
  messaging.requestPermission()
    .then(() => navigator.serviceWorker.getRegistration())
    .then(registration => messaging.useServiceWorker(registration))
    .then(() => messaging.getToken())
    .then(subscribe)
    .then(listen(store, messaging))
    .then(() => toastr.success('Start listen for Push Notice'))
    .catch((e) => {
      console.log(e);
      toastr.error('Fail to active push notice');
    });

  return store;
}