//@flow
import type {Store} from 'redux';
import attendees from './attendees';

export default function (store: Store<Object, Object>) {
  attendees(store);
};
