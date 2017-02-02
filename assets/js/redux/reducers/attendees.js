//@flow
import {UPDATE_CHECK_IN, NOTICE_CHECK_IN, IMPORT_ATTENDEE} from '../action';

const attendee = (state: Object = {}, action: Object) => {
  switch (action.type) {
    case UPDATE_CHECK_IN:
    case NOTICE_CHECK_IN:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        checkIn: action.type === NOTICE_CHECK_IN || action.status
      });
    default:
      return state;
  }
};

const attendees = (state: Array<Object> = [], action: Object) => {
  switch (action.type) {
    case IMPORT_ATTENDEE:
      return [].concat(state, action.attendees);
    case UPDATE_CHECK_IN:
    case NOTICE_CHECK_IN:
      return state.map(t => attendee(t, action));
    default:
      return state;
  }
};

export default attendees;