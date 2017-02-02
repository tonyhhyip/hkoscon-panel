import {UPDATE_CHECK_IN} from '../action';

export default function (state = [], action) {
  if (action.type === UPDATE_CHECK_IN && action.status) {
    return [].concat(state, [action.id]);
  } else {
    return state;
  }
}