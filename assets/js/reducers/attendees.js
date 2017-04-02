//@flow
import {
  SYNC_CHECK_IN,
  LOCAL_CHECK_IN,
  NOTICE_CHECK_IN,
  IMPORT_ATTENDEE_DATA,
  IMPORT_ATTENDEE_CHECKIN,
} from '../action';

const attendee = (state: Object = {}, action: Object) => {
  switch (action.type) {
    case IMPORT_ATTENDEE_CHECKIN:
      return Object.assign({}, state, {
        checkIn: action.checkIn && (state.id in action.checkIn || state.ticket in action.checkIn) ? action.checkIn[state.id in action.checkIn ? state.id : state.ticket] : false
      });
    case SYNC_CHECK_IN:
    case LOCAL_CHECK_IN:
      if (state.ticket !== action.id) {
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
    case IMPORT_ATTENDEE_DATA:
      return [].concat(Array.isArray(action.attendees) ? action.attendees: Object.values(action.attendees));
    case IMPORT_ATTENDEE_CHECKIN:
    case LOCAL_CHECK_IN:
    case NOTICE_CHECK_IN:
    case SYNC_CHECK_IN:
      return state.map(t => attendee(t, action));
    default:
      return state;
  }
};

export default attendees;