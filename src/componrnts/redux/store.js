import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import mediaQueryReducer from './mediaQuerySlice';
import modalReducer from "./modalReducer";

const store = configureStore({

	reducer: {
		header: headerReducer,
		mediaQuery: mediaQueryReducer,
		modal: modalReducer,
	}
})

window.store = store;

export default store;