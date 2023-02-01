import { CHANGE_OVERLAY } from "./overlayType";

const initialState = {
	overlay: {},
};

const overlayReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case CHANGE_OVERLAY:
			return {
				...state,
				overlay: action.payload,
			};
		default:
			return state;
	}
};
export default overlayReducer;
