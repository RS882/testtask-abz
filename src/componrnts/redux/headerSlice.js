import { createSlice } from "@reduxjs/toolkit";


export const headerSlice = createSlice({
	name: 'header',
	initialState: {
		visitedLinkId: [],
		isScroll: false,
	},
	reducers: {

		addVisitedLink: (state, action) => {
			if (!state.visitedLinkId.includes(action.payload)) {
				state.visitedLinkId = [...state.visitedLinkId, action.payload];
			}
		},
		changeIsSrcoll: (state, action) => {
			state.isScroll = action.payload;
		}

	},
})
export const { addVisitedLink, changeIsSrcoll } = headerSlice.actions;
export default headerSlice.reducer;