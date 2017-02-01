import { createStore } from 'redux'
import app from './reducers';
import middlewares from './middlewares';

export default function (states) {
  const [attendees, checkIn] = states;
  const state = {
    attendees: attendees.map(attendee => Object.assign({}, attendee, {
      checkIn: checkIn.indexOf(attendee.id) !== -1
    })),
    visibilityFilter: 'SHOW_ALL',
    localCheckIn: []
  };
  return createStore(app, state, middlewares);
};