import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isModal: false,
	},
	reducers: {
		changeIsModal: (state, action) => {
			state.isModal = action.payload;
		}

	},
})
export const { changeIsModal } = modalSlice.actions;
export default modalSlice.reducer;