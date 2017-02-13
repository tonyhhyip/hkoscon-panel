//@flow
import {FIREBASE_LOGIN, USER_INFO} from '../action';

export default function (state: Object | null = null, action: Object) {
  switch (action.type) {
    case FIREBASE_LOGIN:
      return Object.assign({}, action.user);
    case USER_INFO:
      return Object.assign({}, state, {info: action.info});
    default:
      return state;
  }
}