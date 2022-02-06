import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import mediaQueryReducer from './mediaQuerySlice';
import modalReducer from "./modalReducer";
import usersReducer from "./usersReducer";

const store = configureStore({

	reducer: {
		header: headerReducer,
		mediaQuery: mediaQueryReducer,
		modal: modalReducer,
		users: usersReducer,
	},
	// middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),],

})

window.store = store;

export default store;