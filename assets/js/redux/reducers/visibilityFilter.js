import {FILTER_TICKET_TYPE, FILTER_NAME, SHOW_ALL} from '../action';

export default function (state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SHOW_ALL:
      return SHOW_ALL;
    case FILTER_TICKET_TYPE:
      return state === 'SHOW_ALL' ? {type: action.filter} : Object.assign({}, state, {type: action.filter});
    case FILTER_NAME:
      return state === 'SHOW_ALL' ? {name: action.filter} : Object.assign({}, state, {name: action.filter});
    default:
      return state;
  }
}