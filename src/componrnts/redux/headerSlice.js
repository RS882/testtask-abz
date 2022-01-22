import { createSlice } from "@reduxjs/toolkit";


export const headerSlice = createSlice({
	name: 'header',
	initialState: {
		visitedLinkId: new Set(),
	},
	reducers: {
		addVisitedLink: (state, action) => {
			state.visitedLinkId = state.visitedLinkId.add(action.payload);
		}

	},
})
export const { addVisitedLink } = headerSlice.actions;
export default headerSlice.reducer;