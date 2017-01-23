import {SET_VISIBLILITY_FILTER, FILTER_TICKET_TYPE} from '../action';

export default function (state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_VISIBLILITY_FILTER:
      return action.filter;
    case FILTER_TICKET_TYPE:
      return state === 'SHOW_ALL' ? {type: action.filter} : Object.assign({}, state, {type: action.filter});
    default:
      return state;
  }
}