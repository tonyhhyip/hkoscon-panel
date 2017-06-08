import { combineReducers } from 'redux'
import attendees from './attendees';
import visibilityFilter from './visibilityFilter';
import localCheckIn from './localCheckIn';
import broadcast from './broadcast';
import user from './user';
import tshirt from './tshirt';

export default combineReducers({
  attendees,
  broadcast,
  visibilityFilter,
  localCheckIn,
  user,
  tshirt,
});