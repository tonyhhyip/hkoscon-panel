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
export function updateCheckIn(id: string, status: boolean) {
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

export const IMPORT_ATTENDEE = 'IMPORT_ATTENDEE';
export function importAttendee([attendees, checkIn]: Array<Array<Object>>) {
  toastr.success('Import attendee data');
  return {
    attendees: attendees.map(attendee => Object.assign({}, attendee, {
      checkIn: checkIn.indexOf(attendee.id) !== -1
    })),
    type: IMPORT_ATTENDEE
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