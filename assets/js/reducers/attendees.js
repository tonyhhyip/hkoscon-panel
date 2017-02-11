//@flow
import {
  UPDATE_CHECK_IN,
  NOTICE_CHECK_IN,
  IMPORT_ATTENDEE_DATA,
  IMPORT_ATTENDEE_CHECKIN,
  ADD_ATTENDEE,
  UPDATE_ATTENDEE
} from '../action';

const attendee = (state: Object = {}, action: Object) => {
  switch (action.type) {
    case IMPORT_ATTENDEE_DATA:
      return Object.assign({}, state, {
        checkIn: state.id in action.checkIn ? action.checkIn[state.id] : false
      });
    case UPDATE_CHECK_IN:
    case NOTICE_CHECK_IN:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        checkIn: action.type === NOTICE_CHECK_IN || action.status
      });
    case ADD_ATTENDEE:
      return Object.assign({}, action.attendee, {
        checkIn: false
      });
    case UPDATE_ATTENDEE:
      return Object.assign({}, action.attendee, {
        checkIn: state.checkIn
      });
    default:
      return state;
  }
};

const attendees = (state: Array<Object> = [], action: Object) => {
  switch (action.type) {
    case ADD_ATTENDEE:
      return [].concat(state, attendee({}, action));
    case IMPORT_ATTENDEE_DATA:
      return [].concat(state, action.attendees);
    case IMPORT_ATTENDEE_CHECKIN:
    case UPDATE_CHECK_IN:
    case NOTICE_CHECK_IN:
      return state.map(t => attendee(t, action));
    default:
      return state;
  }
};

export default attendees;