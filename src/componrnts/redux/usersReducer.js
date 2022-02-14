import { createSlice } from '@reduxjs/toolkit';
import { addUsers, getUsers, getPositions, regUser } from './thunkCreation';

const pendingUsers = (state) => {
	state.isFetching = true;
};

const rejectedUsers = (state, action) => {
	state.isFetching = false;
	state.isError = true;

	const error = action.payload !== undefined &&
		action.payload.response !== undefined &&
		action.payload.response.data !== undefined &&
		action.payload.response.data;

	if (!error) {
		state.errorMessage = action.error !== undefined ?
			action.error.message : 'Opps there seems to be an error ';
	} else {
		delete error.success;
		state.errorMessage = error;
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
		positions: [],
		regIdUser: null,
		isReg: false,
		isFetching: false,
		isError: false,
		errorMessage: null,

	},
	reducers: {
		clearError: (state) => {
			state.isError = false;
			state.errorMessage = null;
		},

	},
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

		[getPositions.pending]: pendingUsers,
		[getPositions.fulfilled]: (state, action) => {
			state.isFetching = false;
			state.positions = action.payload.positions;
		},
		[getPositions.rejected]: rejectedUsers,

		[regUser.pending]: pendingUsers,
		[regUser.fulfilled]: (state, action) => {
			state.isFetching = false;
			state.regIdUser = action.payload.user_id;
			state.isReg = action.payload.success;
		},
		[regUser.rejected]: rejectedUsers,

	}
});

export const { clearError } = usersSlice.actions;
export default usersSlice.reducer;



