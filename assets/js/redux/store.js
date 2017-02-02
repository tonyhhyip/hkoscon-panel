import { createStore } from 'redux'
import app from './reducers';
import middlewares from './middlewares';

export default function () {
  const state = {
    visibilityFilter: 'SHOW_ALL',
    timetableFilter: 'SHOW_ALL'
  };
  return createStore(app, state, middlewares);
};