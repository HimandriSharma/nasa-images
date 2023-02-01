import { combineReducers } from "@reduxjs/toolkit";
import imagesReducer from "./images/imagesReducer";
import overlayReducer from "./overlay/overlayReducer";

const rootReducer = combineReducers({
	images: imagesReducer,
	overlay: overlayReducer,
});
export default rootReducer;
