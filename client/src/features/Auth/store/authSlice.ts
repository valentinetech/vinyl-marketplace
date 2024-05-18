import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from 'config/config';
import { toast } from 'react-toastify';
import { AuthLoginRequest, AuthRegisterRequest, AuthState, UserResponse } from './auth.models';

const API_USERS_URL = API_URL + '/api/users/';

type AsyncThunkConfig = {
	rejectValue: string;
};

const initialState: AuthState = {
	userId: '',
	userToken: '',
	isLoading: false,
	isSuccess: false,
	isError: false,
};

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

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: () => initialState,
		logout: (state) => {
			state.isSuccess = false;
			state.isLoading = false;
			state.userToken = '';
			state.userId = '';
			localStorage.removeItem('userId');
			localStorage.removeItem('userToken');
			localStorage.removeItem('username');
			toast.success('Goodbye!');
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
				state.isSuccess = false;
				state.isError = false;
			})
			.addCase(register.fulfilled, (state, action: PayloadAction<UserResponse>) => {
				state.userId = action.payload.userId;
				state.userToken = action.payload.userToken;
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.isError = true;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<UserResponse>) => {
				state.userId = action.payload.userId;
				state.userToken = action.payload.userToken;
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.isError = true;
			});
	},
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
