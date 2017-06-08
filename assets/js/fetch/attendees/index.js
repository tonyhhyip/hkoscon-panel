//@flow
import type {Store} from 'redux';
import data from './attendeeData';
import status from './attendeeStatus';
import tshirt from './tshirt';

export default function (store: Store<Object, Object>) {
  data(store);
  status(store);
  tshirt(store);
}