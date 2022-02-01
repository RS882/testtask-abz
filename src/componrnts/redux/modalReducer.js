import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isModal: false,
		isBodyLock: false,
	},
	reducers: {
		changeIsModal: (state, action) => {
			state.isModal = action.payload;
			state.isBodyLock = action.payload;
		},
		changeIsBodyLock: (state, action) => {
			state.isBodyLock = action.payload;
		}

	},
})
export const { changeIsModal, changeIsBodyLock } = modalSlice.actions;
export default modalSlice.reducer;