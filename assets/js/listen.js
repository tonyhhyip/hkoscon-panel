import toastr from 'toastr';
import messaging from './messaging';
import {noticeCheckIn} from './redux/action';

export default function (store) {
  messaging.requestPermission()
    .then(() => navigator.serviceWorker.getRegistration())
    .then(registration => messaging.useServiceWorker(registration))
    .then(() => messaging.getToken())
    .then((token) => {
      const url = `https://iid.googleapis.com/iid/v1/${token}/rel/topics/check-in`;
      return fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `key=${process.env.FIREBAE_MESSAGE_SERVER_KEY}`,
          'Content-Type': 'application/json'
        }
      });
    })
    .then((response: FetchResponse) => {
      if (response.status === 200) {
        return console.log('Success in subscribe channel');
      } else {
        throw new Error(response);
      }
    })
    .then(() => messaging.onMessage(payload => {
      const state = store.getState();
      if (state.localCheckIn.indexOf(state.id) !== -1) {
        return console.log('Already Check In');
      } else {
        return store.dispatch(noticeCheckIn(payload.data));
      }
    }))
    .then(() => toastr.success('Start listen for Push Notice'))
    .catch((e) => {
      console.log(e);
      toastr.error('Fail to active push notice');
    });

  return store;
}