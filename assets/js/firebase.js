//@flow
import firebase from 'firebase';

const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;

const config = {
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  apiKey: process.env.FIREBASE_API_KEY,
  databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`
};
firebase.initializeApp(config);

export const messaging = firebase.messaging();
export const auth = firebase.auth();
export const database = firebase.database();

export default firebase;