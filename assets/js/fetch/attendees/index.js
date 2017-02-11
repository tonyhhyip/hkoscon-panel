//@flow
import type {Store} from 'redux';
import data from './attendeeData';
import status from './attendeeStatus';

export default function (store: Store<Object, Object>) {
  data(store);
  status(store);
}