//@flow
'use strict';
import toastr from 'toastr';
import firebase from 'firebase/app';
import 'firebase/messaging';

export default function (store) {
  const PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `${PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${PROJECT_ID}.firebaseio.com`,
    storageBucket: `${PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();

  messaging.requestPermission()
    .then(() => console.log('Grant Permission'))
    .then(() => navigator.serviceWorker.getRegistration())
    .then(registration => messaging.useServiceWorker(registration))
    .then(() => messaging.getToken())
    .then((token) => {
      console.log('Finish Get Token');
      return token;
    })
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
    .then((response : FetchResponse) => {
      if (response.status === 200) {
        return console.log('Finish subscribe');
      } else {
        throw new Error(response);
      }
    })
    .then(() => navigator.serviceWorker.getRegistration())
    .then((registration) => messaging.onMessage(payload => {
      console.log(payload);
      const {data} = payload;
      const title = `${data.type} ${data.name} Check In`;
      return registration.showNotification(title, {
        icon: 'https://hkoscon.org/logo.png'
      });
    }))
    .then(() => console.log('Waiting for notice'))
    .catch((e) => {
      console.log(e);
      toastr.error('Fail to active push notice');
    });

  return store;
}