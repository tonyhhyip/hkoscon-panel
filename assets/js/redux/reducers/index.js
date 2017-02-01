import { combineReducers } from 'redux'
import attendees from './attendees';
import visibilityFilter from './visibilityFilter';
import localCheckIn from './localCheckIn';

export default combineReducers({
  attendees,
  visibilityFilter,
  localCheckIn
});