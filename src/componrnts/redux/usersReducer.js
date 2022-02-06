import { createSlice } from '@reduxjs/toolkit';
import { addUsers, getUsers } from './thunkCreation';

const pendingUsers = (state) => {
	state.isFetching = true;
};

const rejectedUsers = (state, action) => {
	state.isFetching = false;
	const error = action.payload;
	delete error.success;
	state.errorMessage = error;
	console.log('Opps there seems to be an error ' + action.error.message)
	//state.errorMessage = action.error.message;
};


export const usersSlice = createSlice({
	name: `users`,
	initialState: {
		users: [],
		// pageSize: 3,
		// currentPage: 1,
		nextPage: ``,
		isShowMore: false,
		isFetching: false,
		errorMessage: ``,

	},
	reducers: {
		// addUsers: (state, action) => {
		// 	state.users = [...state.users, ...action.payload.users,];
		// 	state.nextPage = action.nextUrl;
		// },
		// setUsers: (state, action) => state.users = [...action.payload,],
		// setPageSize: (state, action) => state.pageSize = action.payload,
		// setCurrentPage: (state, action) => state.currentPage = action.payload,
		toggleIsShowMore: (state, action) => state.isShowMore = action.payload,
		toggleIsFetching: (state, action) => state.isFetching = action.payload,
		addErrorMessage: (state, action) => state.errorMessage = action.payload,
	},
	extraReducers: {
		[getUsers.pending]: pendingUsers,
		[getUsers.fulfilled]: (state, action) => {
			state.isFetching = false;
			state.users = [...action.payload.users,];
			state.nextPage = action.payload.links.next_url;
			// console.log(state.users);
			// console.log(state.nextPage);
		},
		[getUsers.rejected]: rejectedUsers,

		[addUsers.pending]: pendingUsers,
		[addUsers.fulfilled]: (state, action) => {
			state.isFetching = false;
			state.users = [...state.users, ...action.payload.users,];
			state.nextPage = action.payload.links.next_url;
		},
		[addUsers.rejected]: rejectedUsers,
	}

});

export const { } = usersSlice.actions;
export default usersSlice.reducer;



