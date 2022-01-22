import { createSlice } from "@reduxjs/toolkit";


export const headerSlice = createSlice({
	name: 'header',
	initialState: {
		value: new Set(),
	},
	reducers: {
		addVisitedLink: (state, action) => {
			state.value = state.value.add(action.payload);
		}

	},
})
export const { addVisitedLink } = headerSlice.actions;
export default headerSlice.reducer;