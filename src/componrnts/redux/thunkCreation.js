import { createAsyncThunk } from "@reduxjs/toolkit";
import { regAPI, userAPI } from './../../api/api';

const usersThunk = (name, funcAPI) => createAsyncThunk(
	name,
	async (arg, thunkAPI) => {
		const res = await funcAPI(arg)
			.then(response => response.data);
		return res.success ? res : thunkAPI.rejectWithValue(res);
	}
)

export const getUsers = usersThunk('users/getUsers', userAPI.getUsers);
export const addUsers = usersThunk('users/addUsers', userAPI.getNextPage);
export const getPositions = usersThunk('users/positions', regAPI.getPosition);

export const regUser = createAsyncThunk(
	'users/regUser',
	async (data, thunkAPI) => {
		const res = await regAPI.getToken()
			.then(response => response.data.token)
			.then(async token => {
				const ress = await regAPI.regUser(data, token)
					.then(response => response.data)
				return ress;
			})
			.catch(reject => thunkAPI.rejectWithValue(reject))

		return res
	}
);

