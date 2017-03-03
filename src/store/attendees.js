'use strict';

const firebase = require('./../firebase');
const storage = require('./storage');

const db = firebase.database();
db.ref('attendees').once('value', (snapshot) => {
  storage.attendees = snapshot;
});


