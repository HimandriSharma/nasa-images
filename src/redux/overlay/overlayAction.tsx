import { CHANGE_OVERLAY } from "./overlayType";

export const changeOverlay = (selectedImage: any) => {
	return {
		type: CHANGE_OVERLAY,
		payload: selectedImage,
	};
};
