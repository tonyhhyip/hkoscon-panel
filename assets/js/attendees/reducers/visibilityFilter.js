import {SET_VISIBLILITY_FILTER, FILTER_TICKET_TYPE, FILTER_NAME} from '../action';

export default function (state = 'SHOW_ALL', action) {
  console.log(action);
  switch (action.type) {
    case SET_VISIBLILITY_FILTER:
      return action.filter;
    case FILTER_TICKET_TYPE:
      return state === 'SHOW_ALL' ? {type: action.filter} : Object.assign({}, state, {type: action.filter});
    case FILTER_NAME:
      return state === 'SHOW_ALL' ? {name: action.filter} : Object.assign({}, state, {name: action.filter});
    default:
      return state;
  }
}