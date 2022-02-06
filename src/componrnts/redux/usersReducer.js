import { createSlice } from '@reduxjs/toolkit';
import { userAPI } from './../../api/api';

export const usersSlice = createSlice({
	name: `users`,
	initialState: {
		users: [],
		pageSize: 3,
		currentPage: 1,
		nextPage: ``,
		isShowMore: false,
		isFetching: false,
		errorMessage: ``,

	},
	reducers: {
		addUsers: (state, action) => {
			state.users = [...state.users, ...action.payload.users,];
			state.nextPage = action.nextUrl;
		},
		setUsers: (state, action) => state.users = [...action.payload,],
		setPageSize: (state, action) => state.pageSize = action.payload,
		setCurrentPage: (state, action) => state.currentPage = action.payload,
		toggleIsShowMore: (state, action) => state.isShowMore = action.payload,
		toggleIsFetching: (state, action) => state.isFetching = action.payload,
		addErrorMessage: (state, action) => state.errorMessage = action.payload,
	},
});

export const { addUsers, setUsers, setPageSize, setCurrentPage, setNextPage,
	toggleIsShowMore, toggleIsFetching, addErrorMessage } = usersSlice.actions;
export default usersSlice.reducer;

// ThunkCreation

export const getUsers = (currentPage, pageSize) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	userAPI.getUsers(currentPage, pageSize)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			if (data.success) {
				dispatch(addUsers({ users: data.users, nextUrl: data.links.next_url, }));
			} else { return data }
		})
		.then(error => {
			delete error.success;
			dispatch(addErrorMessage(error))
		})
		.finally(() => dispatch(toggleIsFetching(false)))
}