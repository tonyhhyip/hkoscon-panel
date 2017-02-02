//@flow
import type {Store} from 'redux';
import fetching from '../fetch';
import data from './attendeeData';
import status from './attendeeStatus';
import {importAttendee} from '../../action';

export default function (store: Store<Object, Object>) {
  fetching(store, Promise.all([data, status]), importAttendee);
}