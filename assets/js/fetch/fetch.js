//@flow
import type {Store} from 'redux';

export default function (store: Store<Object, Object>, fetcher: Promise<*>, actionCreator: Function) {
  fetcher
    .then(data => actionCreator(data))
    .then(action => store.dispatch(action));
};