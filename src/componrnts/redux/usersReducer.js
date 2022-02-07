import { createSlice } from '@reduxjs/toolkit';
import { addUsers, getUsers } from './thunkCreation';

const pendingUsers = (state) => {
	state.isFetching = true;
};

const rejectedUsers = (state, action) => {
	state.isFetching = false;
	if (action.error) {
		state.errorMessage = action.error.message;
	} else if (!action.payload.success) {
		const error = action.payload;
		delete error.success;
		state.errorMessage = error;
	} else {
		state.errorMessage = 'Opps there seems to be an error ';
	}
	console.log('Opps there seems to be an error ' + state.errorMessage)
};


export const usersSlice = createSlice({
	name: `users`,
	initialState: {
		users: {
			users: [],
			totalUsers: 0,
			nextPage: ``,
		},
		isFetching: false,
		errorMessage: {
			"message": "Validation failed",
			"fails": {
				"count": [
					"The count must be an integer."
				],
				"page": [
					"The page must be at least 1."
				]
			}
		},

	},
	reducers: {},
	extraReducers: {
		[getUsers.pending]: pendingUsers,
		[getUsers.fulfilled]: (state, action) => {
			state.isFetching = false;
			state.users.users = [...action.payload.users,];
			state.users.nextPage = action.payload.links.next_url;
			state.users.totalUsers = action.payload.total_users;
		},
		[getUsers.rejected]: rejectedUsers,

		[addUsers.pending]: pendingUsers,
		[addUsers.fulfilled]: (state, action) => {
			state.isFetching = false;
			state.users.users = [...state.users.users, ...action.payload.users,];
			state.users.nextPage = action.payload.links.next_url;
			state.users.totalUsers = action.payload.total_users;
		},
		[addUsers.rejected]: rejectedUsers,
	}
});

export const { } = usersSlice.actions;
export default usersSlice.reducer;



