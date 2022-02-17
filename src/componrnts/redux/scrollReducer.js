import { createSlice } from "@reduxjs/toolkit";


export const scrollSlice = createSlice({
	name: 'scroll',
	initialState: {
		articleIsScroll: true,
	},
	reducers: {
		// был ли скролл Article
		changeArticleIsScroll: (state, action) => {
			state.articleIsScroll = state.articleIsScroll && action.payload;
		}

	},
})
export const { changeArticleIsScroll } = scrollSlice.actions;
export default scrollSlice.reducer;