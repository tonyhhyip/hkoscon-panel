// @flow
import { IMPORT_BROADCAST, ADD_BROADCAST } from '../action';

export default function (state: Array<Object> = [], action) {
  switch (action.type) {
    case IMPORT_BROADCAST:
      return action.messages;
    case ADD_BROADCAST:
      return [action.message].concat(state);
    default:
      return state;
  }
}
