//@flow
import type {Store} from 'redux';
import attendees from './attendees';
//import timetable from './timetable';

export default function (store: Store<Object, Object>) {
  attendees(store);
  //timetable(store);
};
