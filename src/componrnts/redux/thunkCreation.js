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