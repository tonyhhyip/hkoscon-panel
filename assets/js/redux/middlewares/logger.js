//@flow
import type {Store} from 'redux';

export default function logger(store: Store<Object, Object>) {
  return (next: Function) => (action: Object) => {
    console.log('Ready to dispatch: ', action);
    console.log('Current State: ', store.getState());
    const result = next(action);
    console.log('Current State: ', store.getState());
    return result;
  }
}