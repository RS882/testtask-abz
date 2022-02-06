import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './thunkCreation';


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
		addUsers: (state, action) => {
			state.users = [...state.users, ...action.payload.users,];
			state.nextPage = action.nextUrl;
		},
		setUsers: (state, action) => state.users = [...action.payload,],
		// setPageSize: (state, action) => state.pageSize = action.payload,
		// setCurrentPage: (state, action) => state.currentPage = action.payload,
		toggleIsShowMore: (state, action) => state.isShowMore = action.payload,
		toggleIsFetching: (state, action) => state.isFetching = action.payload,
		addErrorMessage: (state, action) => state.errorMessage = action.payload,
	},
	extraReducers: {
		[getUsers.pending]: (state) => {
			state.isFetching = true
		},

		[getUsers.fulfilled]: (state, action) => {
			state.isFetching = false;
			console.log(action);
			state.users = [...state.users, ...action.payload.users,];
			state.nextPage = action.payload.links.next_url;
		},
		[getUsers.rejected]: (state, action) => {
			state.isFetching = false;
			const error = action.payload;
			delete error.success;
			state.errorMessage = error;
			console.log('Opps there seems to be an error ' + action.error.message)
			//state.errorMessage = action.error.message;
		},
	}

});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;



