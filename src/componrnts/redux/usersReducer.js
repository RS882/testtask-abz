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
			if (action.payload.success) {
				state.users = [...state.users, ...action.payload.users,];
				state.nextPage = action.payload.links.next_url;
			} else {
				const error = action.payload;
				delete error.success;
				state.errorMessage = error;
			}

		},
		[getUsers.rejected]: (state, action) => {
			state.isFetching = false
			console.log('Opps there seems to be an error ' + action.error.message)
			state.errorMessage = action.error.message;
		},
	}

});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;

// ThunkCreation

// export const getUsers = (pageSize) => (dispatch) => {
// 	dispatch(toggleIsFetching(true));
// 	console.log(222);
// 	userAPI.getUsers(pageSize)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data);
// 			if (data.success) {
// 				dispatch(addUsers({ users: data.users, nextUrl: data.links.next_url, }));
// 			} else { return data }
// 		})
// 		.then(error => {
// 			delete error.success;
// 			dispatch(addErrorMessage(error))
// 		})
// 		.finally(() => dispatch(toggleIsFetching(false)))
// }

