//@flow
import type {Store} from 'redux';

export default function logger(store: Store<Object, Object>) {
  return (next: Function) => (action: Object) => {
    console.time('redux');
    const result = next(action);
    console.timeEnd('redux');
	  console.debug('Ready to dispatch: ', action);
	  console.debug('Current State: ', store.getState());
    return result;
  }
}