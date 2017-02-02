//@flow
import type {Store} from 'redux';
import data from './attendeeData';
import status from './attendeeStatus';
import {importAttendee} from '../redux/action';

export default function (store: Store<Object, Object>) {
  Promise.all([data, status])
    .then(([data, status]) => importAttendee(data, status))
    .then(action => store.dispatch(action));
}