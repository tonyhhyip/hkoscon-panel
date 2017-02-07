import {FIREBASE_LOGIN, USER_SESSION} from '../action';

export default function (state = null, action) {
  switch (action.type) {
    case FIREBASE_LOGIN:
    case USER_SESSION:
      return Object.assign({}, action.user);
    default:
      return state;
  }
}