'use strict';
import { createStore } from 'redux'
import app from './reducers';

export default function (state) {
  return createStore(app, state);
};