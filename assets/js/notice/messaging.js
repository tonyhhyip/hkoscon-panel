import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

export default messaging;