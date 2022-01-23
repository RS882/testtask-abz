import { createSlice } from "@reduxjs/toolkit";


export const mediaQuery = createSlice({
	name: 'mediaQuery',
	initialState: {
		breakPoints: {
			is768: null,
			is1024: null,
			is1392: null,
		},
	},
	reducers: {

		setBreakPoints: (state, action) => {

			state.breakPoints = action.payload;
		},
	}
})
export const { setBreakPoints } = mediaQuery.actions;
export default mediaQuery.reducer;