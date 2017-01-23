//@flow
'use strict';
export const TOGGLE_CHECKIN = 'TOGGLE_CHECKIN';
export function toggleCheckIn(attendee: string) {
  return {
    type: TOGGLE_CHECKIN,
    attendee
  }
}

export const SHOW_ALL = 'SHOW_ALL';
export function showAll() {
  return {
    type: SHOW_ALL
  };
}

export const SET_VISIBLILITY_FILTER = 'SET_VISIBILITY_FILTER';
export function setVisibilityFilter(filter: string) {
  return {
    type: SET_VISIBLILITY_FILTER,
    filter
  };
}

export const FILTER_TICKET_TYPE = 'FILTER_TICKET_TYPE';
export function filterTicketType(filter: string) {
  return {
    type: FILTER_TICKET_TYPE,
    filter
  }
}