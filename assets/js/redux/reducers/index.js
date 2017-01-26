import { combineReducers } from 'redux'
import attendees from './attendees';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  attendees,
  visibilityFilter
});