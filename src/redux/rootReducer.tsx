import { combineReducers } from "@reduxjs/toolkit";
import imagesReducer from "./images/imagesReducer";

const rootReducer = combineReducers({
	images: imagesReducer,
});
export default rootReducer;
