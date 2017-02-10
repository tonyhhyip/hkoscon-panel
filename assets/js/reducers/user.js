import {FIREBASE_LOGIN, USER_INFO} from '../action';

export default function (state = null, action) {
  switch (action.type) {
    case FIREBASE_LOGIN:
      return Object.assign({}, action.user);
    case USER_INFO:
      return Object.assign({}, state, {info: action.info});
    default:
      return state;
  }
}