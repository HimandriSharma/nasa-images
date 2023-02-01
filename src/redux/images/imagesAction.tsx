import {
	FETCH_IMAGES_FAILURE,
	FETCH_IMAGES_REQUEST,
	FETCH_IMAGES_SUCCESS,
} from "./imagesType";
import axios from "axios";

export const fetchImagesRequest = () => {
	return {
		type: FETCH_IMAGES_REQUEST,
	};
};
export const fetchImagesSuccess = (images: any, spotlight: any) => {
	return {
		type: FETCH_IMAGES_SUCCESS,
		payload: images,
		spotlight,
	};
};
export const fetchImagesFailure = (error: { message: any }) => {
	return {
		type: FETCH_IMAGES_FAILURE,
		payload: error.message,
	};
};

export const fetchImages = () => {
	return (dispatch: any) => {
		dispatch(fetchImagesRequest);
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=2022-10-01&end_date=2022-10-29&thumbs=true"
			)
			.then((res) => {
				const images = [];
				const spotlight = res.data[res.data.length - 1];
				while (res.data.length > 0) {
					const chunk = res.data.splice(0, 7);
					images.push(chunk);
				}
				dispatch(fetchImagesSuccess(images, spotlight));
			})
			.catch((err) => {
				const errorMsg = err.message;
				dispatch(fetchImagesFailure(errorMsg));
			});
	};
};
