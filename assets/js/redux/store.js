'use strict';
import { createStore } from 'redux'
import app from './reducers';

export default function (states) {
  const [attendees, checkIn] = states;
  const state = {
    attendees: attendees.map(attendee => Object.assign({}, attendee, {
      checkIn: checkIn.indexOf(attendee.id) !== -1
    }))
  };
  return createStore(app, state);
};