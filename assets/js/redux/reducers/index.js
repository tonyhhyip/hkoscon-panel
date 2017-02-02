import { combineReducers } from 'redux'
import attendees from './attendees';
import visibilityFilter from './visibilityFilter';
import localCheckIn from './localCheckIn';
import languages from './languages';
import tags from './tags';
import speakers from './speakers';
import schedule from './schedule';

export default combineReducers({
  attendees, schedule,
  visibilityFilter, localCheckIn,
  languages, tags, speakers
});