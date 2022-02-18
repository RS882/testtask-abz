import { createSlice } from "@reduxjs/toolkit";


export const mediaQuery = createSlice({
	name: 'mediaQuery',
	initialState: {
		breakPoints: {
			is768: null,
			is1024: null,
			is1392: null,
		},
		isRetina: false,
	},
	reducers: {
		// устанвливает true если ширина больше брейкпоинта
		setBreakPoints: (state, action) => {
			state.breakPoints = action.payload;
		},
		// устанвливает true если дисплей retina
		setIsRetina: (state, action) => {
			state.isRetina = action.payload;
		}
	}
})
export const { setBreakPoints, setIsRetina } = mediaQuery.actions;
export default mediaQuery.reducer;