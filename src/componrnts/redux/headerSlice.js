import { createSlice } from "@reduxjs/toolkit";


export const headerSlice = createSlice({
	name: 'header',
	initialState: {
		visitedLinkId: [],
		isScroll: false,
	},
	reducers: {
		// массив посещенных пунктов меню
		addVisitedLink: (state, action) => {
			if (!state.visitedLinkId.includes(action.payload)) {
				state.visitedLinkId = [...state.visitedLinkId, action.payload];
			}
		},
		// был ли скролл
		changeIsSrcoll: (state, action) => {
			state.isScroll = action.payload;
		}

	},
})
export const { addVisitedLink, changeIsSrcoll } = headerSlice.actions;
export default headerSlice.reducer;