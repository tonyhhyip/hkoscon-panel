import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/auth';

const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;

const config = {
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  apiKey: process.env.FIREBASE_API_KEY
};
firebase.initializeApp(config);

export const messaging = firebase.messaging();

export default firebase;