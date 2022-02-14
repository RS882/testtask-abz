import { createAsyncThunk } from "@reduxjs/toolkit";
import { regAPI, userAPI } from './../../api/api';
// функция создания Thunk с именем name , асинх функцией funcAPI и агрументом arg
const usersThunk = (name, funcAPI) => createAsyncThunk(
	name,
	async (arg, thunkAPI) => {
		const res = await funcAPI(arg)
			.then(response => response.data)
			.catch(reject => thunkAPI.rejectWithValue(reject));//выводим ошибку
		return res;
	}
)

export const getUsers = usersThunk('users/getUsers', userAPI.getUsers);// стартовая закрузка пользователей
export const addUsers = usersThunk('users/addUsers', userAPI.getNextPage);//загрузка след страницы с пользователями
export const getPositions = usersThunk('users/positions', regAPI.getPosition);// получение списка позиций

//регистриуем пользователя  . данные пользоветля -data
export const regUser = createAsyncThunk(
	'users/regUser',
	async (data, thunkAPI) => {
		const res = await regAPI.getToken()
			.then(response => response.data.token)// получаем токен
			.then(async token => {
				const resPost = await regAPI.regUser(data, token)// постим данные 
					.then(response => response.data)
				return resPost;
			})
			.catch(reject => thunkAPI.rejectWithValue(reject));//выводим ошибку
		return res;
	}
);

