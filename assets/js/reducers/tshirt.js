// @flow
import { LOAD_TSHIRT, PUSH_ADD_TSHIRT } from '../action';

export default function (state: {[id: string]: {request: string, provide: string}} = {}, action: Object) {
	if (action.type === LOAD_TSHIRT) {
		return action.data;
	} else if (action.type === PUSH_ADD_TSHIRT) {
		return Object.assign({}, state, {
			[action.user]: {
				provide: action.provide,
				request: action.request
			}
		})
	}

	return state;
};
