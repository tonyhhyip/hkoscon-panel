//@flow
import type {Store} from 'redux';
import connection from './connection';
import attendees from './attendees';
import timetable from './timetable';

export default function (store: Store<Object, Object>) {
  connection();
  attendees(store);
  timetable(store);
};
