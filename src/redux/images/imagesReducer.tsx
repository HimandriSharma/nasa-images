import {
	FETCH_IMAGES_FAILURE,
	FETCH_IMAGES_REQUEST,
	FETCH_IMAGES_SUCCESS,
	FETCH_MORE_IMAGES_SUCCESS,
} from "./imagesType";

const initialState = {
	loading: true,
	images: [],
	spotlight: {},
	error: "",
};

const reducer = (
	state = initialState,
	action: {
		spotlight: any;
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
				spotlight: action.spotlight,
				error: "",
			};
		case FETCH_IMAGES_FAILURE:
			return {
				loading: false,
				images: [],
				spotlight: {},
				error: action.payload,
			};
		case FETCH_MORE_IMAGES_SUCCESS:
			return {
				...state,
				images: state.images.concat(action.payload),
				error: "",
			};
		default:
			return state;
	}
};
export default reducer;
