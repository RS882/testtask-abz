import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import mediaQueryReducer from './mediaQuerySlice';

const store = configureStore({

	reducer: {
		header: headerReducer,
		mediaQuery: mediaQueryReducer,
	}
})

window.store = store;

export default store;