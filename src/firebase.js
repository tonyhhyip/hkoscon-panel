'use strict';

const firebase = require('firebase-admin');

const account = require('../firebase-admin.json');

firebase.initializeApp({
  credential: firebase.credential.cert(account),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
});

module.exports = firebase;
