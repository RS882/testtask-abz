import { createSlice } from "@reduxjs/toolkit";


export const headerSlice = createSlice({
	name: 'header',
	initialState: {
		visitedLinkId: [],
	},
	reducers: {
		addVisitedLink: (state, action) => {
			if (!state.visitedLinkId.includes(action.payload)) {
				state.visitedLinkId = [...state.visitedLinkId, action.payload];
			}
		}

	},
})
export const { addVisitedLink } = headerSlice.actions;
export default headerSlice.reducer;