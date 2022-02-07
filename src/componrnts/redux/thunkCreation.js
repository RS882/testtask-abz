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
		const res = await userAPI.getNextPage(url)
			.then(response => {
				//console.log(response);
				return response.data
			});
		if (res.success) {
			return res;
		} else {
			return thunkAPI.rejectWithValue(res);
		}
	}
);