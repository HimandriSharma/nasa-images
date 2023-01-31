import {
	FETCH_IMAGES_FAILURE,
	FETCH_IMAGES_REQUEST,
	FETCH_IMAGES_SUCCESS,
} from "./imagesType";

const initialState = {
	loading: true,
	images: [],
	error: "",
};

const reducer = (
	state = initialState,
	action: {
		payload: any;
		type: any;
	}
) => {
	switch (action.type) {
		case FETCH_IMAGES_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_IMAGES_SUCCESS:
			return {
				loading: false,
				images: action.payload,
				error: "",
			};
		case FETCH_IMAGES_FAILURE:
			return {
				loading: false,
				images: [],
				error: action.payload,
			};
		default:
			return state;
	}
};
export default reducer;
