import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import mediaQueryReducer from './mediaQuerySlice';
import modalReducer from "./modalReducer";
import scrollReducer from "./scrollReducer";
import usersReducer from "./usersReducer";

const store = configureStore({
	reducer: {
		header: headerReducer,
		mediaQuery: mediaQueryReducer,
		modal: modalReducer,
		users: usersReducer,
		scroll: scrollReducer,
	},

})

window.store = store;

export default store;