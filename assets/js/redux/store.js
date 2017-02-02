import { createStore } from 'redux'
import app from './reducers';
import middlewares from './middlewares';

export default function () {
  const state = {
    attendees: [],
    visibilityFilter: 'SHOW_ALL',
    localCheckIn: []
  };
  return createStore(app, state, middlewares);
};