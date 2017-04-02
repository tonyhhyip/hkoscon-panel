//@flow
import type {Store} from 'redux';
import attendees from './attendees';
import broadcast from './broadcast';

export default function (store: Store<Object, Object>) {
  attendees(store);
  broadcast(store);
};
