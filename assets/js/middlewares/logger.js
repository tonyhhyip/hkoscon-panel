//@flow
import type {Store} from 'redux';

export default function logger(store: Store<Object, Object>) {
  return (next: Function) => (action: Object) => {
    console.time('redux');
    console.debug('Ready to dispatch: ', action);
    const result = next(action);
    console.debug('Current State: ', store.getState());
    console.timeEnd('redux');
    return result;
  }
}