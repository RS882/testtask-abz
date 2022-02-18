import { createSlice } from "@reduxjs/toolkit";


export const scrollSlice = createSlice({
	name: 'scroll',
	initialState: {
		articleIsScroll: false,
		usersIsScroll: false,
	},
	reducers: {
		// был ли скролл Article
		changeArticleIsScroll: (state, action) => {
			state.articleIsScroll = state.articleIsScroll && action.payload;
		},
		// был ли скролл users
		changeUsersIsScroll: (state, action) => {
			state.usersIsScroll = state.usersIsScroll && action.payload;
		}


	},

})
export const { changeArticleIsScroll, changeUsersIsScroll } = scrollSlice.actions;
export default scrollSlice.reducer;