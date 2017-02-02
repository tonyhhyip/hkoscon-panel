//@flow
import {IMPORT_TIMETABLE} from '../action';

export default function (state: Object = [], action: Object) {
  if (action.type === IMPORT_TIMETABLE && action.module === 'schedule') {
    return [].concat(state, action.data);
  } else {
    return state;
  }
}