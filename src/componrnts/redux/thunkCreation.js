import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from './../../api/api';


export const getUsers = createAsyncThunk(
	'users/getUsers',
	async (pageSize, thunkAPI) => {
		const res = await userAPI.getUsers(pageSize)
			.then(response => response.data);
		if (res.success) {
			return res;
		} else {
			return thunkAPI.rejectWithValue(res);
		}
	}
);

export const addUsers = createAsyncThunk(
	'users/addUsers',
	async (url, thunkAPI) => {
		const res = await userAPI.addUsers(url)
			.then(response => response.data);
		if (res.success) {
			return res;
		} else {
			return thunkAPI.rejectWithValue(res);
		}
	}
);