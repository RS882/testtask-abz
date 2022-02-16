import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isModal: false,
		isBodyLock: false,
		scrollWidth: null,
	},
	reducers: {
		// устанвливает откыто ли модльное окно и залочена прокрутка страницы
		changeIsModal: (state, action) => {
			state.isModal = action.payload;
			state.isBodyLock = action.payload;
		},
		// устанвливает залочена ли прокрутка страницы
		changeIsBodyLock: (state, action) => {
			state.isBodyLock = action.payload;
		},
		// устанавливаем ширину полосы прокрутки
		setScrollWidth: (state, action) => {
			state.scrollWidth = action.payload
		},
	},
})
export const { changeIsModal, changeIsBodyLock, setScrollWidth } = modalSlice.actions;
export default modalSlice.reducer;