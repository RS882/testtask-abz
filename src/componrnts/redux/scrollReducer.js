import { createSlice } from "@reduxjs/toolkit";


export const scrollSlice = createSlice({
	name: 'scroll',
	initialState: {
		articleIsScroll: false,

	},
	reducers: {
		// был ли скролл Article
		changeArticleIsScroll: (state, action) => {
			state.articleIsScroll = state.articleIsScroll || action.payload;

		},
		// был ли скролл users

	},

})
export const { changeArticleIsScroll, } = scrollSlice.actions;
export default scrollSlice.reducer;