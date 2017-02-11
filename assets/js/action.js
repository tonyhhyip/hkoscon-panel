//@flow
import toastr from 'toastr';

export const SHOW_ALL = 'SHOW_ALL';
export function showAll() {
  return {
    type: SHOW_ALL
  };
}

export const FILTER_TICKET_TYPE = 'FILTER_TICKET_TYPE';
export function filterTicketType(filter: string) {
  return {
    type: FILTER_TICKET_TYPE,
    filter
  }
}

export const FILTER_NAME = 'FILTER_NAME';
export function filterName(filter: string) {
  return {
    type: FILTER_NAME,
    filter: new RegExp(filter, 'ig')
  }
}

export const UPDATE_CHECK_IN = 'UPDATE_CHECK_IN';
export function updateCheckIn(id: string, status: boolean | string) {
  return {
    id, status,
    type: UPDATE_CHECK_IN
  }
}

export const NOTICE_CHECK_IN = 'NOTICE_CHECK_IN';
export function noticeCheckIn(data: Object) {
  return {
    data, id: data.id,
    type: NOTICE_CHECK_IN
  };
}

export const IMPORT_ATTENDEE_DATA = 'IMPORT_ATTENDEE_DATE';
export function importAttendeeData(attendees: Array<Object>) {
  return {
    attendees,
    type: IMPORT_ATTENDEE_DATA
  }
}

export const IMPORT_ATTENDEE_CHECKIN = 'IMPORT_ATTENDEE_CHECK_IN';
export function importAttendeeCheckin(checkIn: Object) {
  return {
    checkIn,
    type: IMPORT_ATTENDEE_CHECKIN
  }
}

export const ADD_ATTENDEE = 'ADD_ATTENDEE';
export function addAttendee(attendee: Object) {
  return {
    attendee,
    type: ADD_ATTENDEE,
  }
}

export const UPDATE_ATTENDEE = 'UPDATE_ATTENDEE';
export function updateAttendee(index: number, attendee: Object) {
  return {
    index, attendee,
    type: UPDATE_ATTENDEE
  }
}

export const IMPORT_TIMETABLE = 'IMPORT_TIMETABLE';
export function importTimetable(module: string, data: any) {
  if (module === 'schedule') {
    toastr.success('Import Timetable');
  }
  return {
    data, module,
    type: IMPORT_TIMETABLE
  }
}

export const FIREBASE_LOGIN = 'FIREBASE_LOGIN';
export function firebaseLogin(user: Object) {
  return {
    user,
    type: FIREBASE_LOGIN
  };
}

export const USER_INFO = 'USER_INFO';
export function userInfo(info) {
  return {
    info,
    type: USER_INFO
  }
}
