import {LOCAL_CHECK_IN} from '../action';

export default function (state = [], action) {
  if (action.type === LOCAL_CHECK_IN && action.status) {
    return [].concat(state, [action.id]);
  } else {
    return state;
  }
}