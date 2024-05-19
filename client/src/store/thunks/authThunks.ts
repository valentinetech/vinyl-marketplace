import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_USERS_URL } from 'config/config';
import { AuthLoginRequest, AuthRegisterRequest, UserResponse } from 'store/slices/authSlice.models';
import { AsyncThunkConfig } from './authThunks.models';

export const register = createAsyncThunk<UserResponse, AuthRegisterRequest, AsyncThunkConfig>(
	'auth/register',
	async (user, { rejectWithValue }) => {
		try {
			const response = await axios.post(API_USERS_URL + 'register', user);
			const data: UserResponse = response.data;
			if (data) {
				localStorage.setItem('userId', data.userId);
				localStorage.setItem('userToken', data.userToken);
			}
			return data;
		} catch (error: unknown) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			} else {
				return rejectWithValue('An unknown error occurred');
			}
		}
	},
);

export const login = createAsyncThunk('auth/login', async (user: AuthLoginRequest, { rejectWithValue }) => {
	try {
		const response = await axios.post(API_USERS_URL + 'login', user);
		const data: UserResponse = response.data;

		if (data) {
			localStorage.setItem('userId', data.userId);
			localStorage.setItem('userToken', data.userToken);
		}

		return data;
	} catch (error) {
		if (error instanceof Error) {
			return rejectWithValue(error.message);
		} else {
			return rejectWithValue('An unknown error occurred');
		}
	}
});
