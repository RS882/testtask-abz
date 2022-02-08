import { createAsyncThunk } from "@reduxjs/toolkit";
import { regAPI, userAPI } from './../../api/api';

const usersThunk = (name, funcAPI) => createAsyncThunk(
	name,
	async (arg, thunkAPI) => {
		const res = await funcAPI(arg)
			.then(response => response.data);
		if (res.success) {
			return res;
		} else {
			return thunkAPI.rejectWithValue(res);
		}
	}
)

export const getUsers = usersThunk('users/getUsers', userAPI.getUsers);
export const addUsers = usersThunk('users/addUsers', userAPI.getNextPage);
export const getPositions = usersThunk('users/positions', regAPI.getPosition);
