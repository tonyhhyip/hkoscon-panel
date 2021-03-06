//@flow

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

export const LOCAL_CHECK_IN = 'LOCAL_CHECK_IN';
export function localCheckIn(id: string, status: string) {
	return {
		id, status,
		type: LOCAL_CHECK_IN
	}
}

export const SYNC_CHECK_IN = 'SYNC_CHECK_IN';
export function syncCheckIn(id: string, status: string) {
	return {
		id,
		status,
		type: SYNC_CHECK_IN
	}
}

export const UPDATE_CHECK_IN = 'LOCAL_CHECK_IN';
export function updateCheckIn(id: string, status: boolean | string) {
	return {
		id,
		status,
		type: UPDATE_CHECK_IN
	}
}

export const NOTICE_CHECK_IN = 'NOTICE_CHECK_IN';
export function noticeCheckIn(payload: Object) {
	const {data} = payload;
	return {
		data,
		id: data.ticket,
		type: NOTICE_CHECK_IN,
		message: payload.notification.title,
	};
}

export const IMPORT_ATTENDEE_DATA = 'IMPORT_ATTENDEE_DATE';
export function importAttendeeData(attendees: Array<Object> | Object) {
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

export const FIREBASE_LOGIN = 'FIREBASE_LOGIN';
export function firebaseLogin(user: Object) {
	return {
		user,
		type: FIREBASE_LOGIN
	};
}

export const USER_INFO = 'USER_INFO';
export function userInfo(info: Object) {
	return {
		info,
		type: USER_INFO
	}
}

export const IMPORT_BROADCAST = 'IMPORT_BROADCAST';
export function importBroadcast(messages: Object) {
	return {
		messages: Object.values(messages).reverse(),
		type: IMPORT_BROADCAST,
	}
}

export const ADD_BROADCAST = 'ADD_BROADCAST';
export function addBroadcast(message: Object) {
	return {
		message,
		type: ADD_BROADCAST,
	}
}

export const LOAD_TSHIRT = 'LOAD_T_SHIRT';
export function loadTshirt(data) {
	return {
		data,
		type: LOAD_TSHIRT,
	};
}

export const PUSH_ADD_TSHIRT = 'PUSH_ADD_T_SHIRT';
export function pushAddTshirt(user: string, {request, provide}: {request: string, provide: string}) {
	return {
		user,
		request,
		provide,
		type: PUSH_ADD_TSHIRT,
	}
}
