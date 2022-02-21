import { createSlice } from '@reduxjs/toolkit';
import { addUsers, getUsers, getPositions, regUser } from './thunkCreation';
// функция выполняется в процессе асинх загрузки
const pendingUsers = (state) => {
	state.isFetching = true;
};
// функция обрабоки ошибок
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
		regIdUser: null,// рег номер пользователя
		isReg: false,// прошла регистрация или нет
		isFetching: true,// идет запрос или нет
		isError: false,// есть ошибка или нет
		errorMessage: null,


	},
	reducers: {
		// очищаем ошибки 
		clearError: (state) => {
			state.isError = false;
			state.errorMessage = null;
		},
		// загрузка завершена
		stopFetching: (state) => {
			state.isFetching = false;
		}

	},
	extraReducers: {
		// статовая загрузка списка пользователей
		[getUsers.pending]: pendingUsers,
		[getUsers.fulfilled]: (state, action) => {
			state.isFetching = false;
			state.users.users = [...action.payload.users,];
			state.users.nextPage = action.payload.links.next_url;
			state.users.totalUsers = action.payload.total_users;
		},
		[getUsers.rejected]: rejectedUsers,
		// добавление пользователей  (showMore)
		[addUsers.pending]: pendingUsers,
		[addUsers.fulfilled]: (state, action) => {
			state.isFetching = false;
			state.users.users = [...state.users.users, ...action.payload.users,];
			state.users.nextPage = action.payload.links.next_url;
			state.users.totalUsers = action.payload.total_users;
		},
		[addUsers.rejected]: rejectedUsers,
		// добавляем список позиций
		[getPositions.pending]: pendingUsers,
		[getPositions.fulfilled]: (state, action) => {
			state.isFetching = false;
			state.positions = action.payload.positions;
		},
		[getPositions.rejected]: rejectedUsers,
		// добавляем рег данные нового пользователя
		[regUser.pending]: pendingUsers,
		[regUser.fulfilled]: (state, action) => {
			state.isFetching = false;
			state.regIdUser = action.payload.user_id;
			state.isReg = action.payload.success;
		},
		[regUser.rejected]: rejectedUsers,

	}
});

export const { clearError, stopFetching } = usersSlice.actions;
export default usersSlice.reducer;



