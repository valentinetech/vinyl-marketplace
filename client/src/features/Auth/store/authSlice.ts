import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from 'config/config';
import { toast } from 'react-toastify';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;
const API_USERS_URL = API_URL + '/api/users/';

interface UserInfo {
	_id: string;
	username: string;
	email: string;
}

interface User {
	userInfo: UserInfo | string | null;
	userToken: string | null;
}

export interface AuthRequest {
	username: string;
	password: string;
	email?: string;
}

interface AuthState extends User {
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	message: string;
}

const initialState: AuthState = {
	userToken: userToken ? userToken : null,
	userInfo: userToken ? userToken : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const register = createAsyncThunk('auth/register', async (user: AuthRequest, { rejectWithValue }) => {
	try {
		const { data } = await axios.post(API_USERS_URL + 'register', user);

		if (data) {
			localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
			localStorage.setItem('userToken', data.userToken);
		}
		return data;
	} catch (error) {
		if (error instanceof Error) {
			const message = `This is error ${error.message}`;
			return rejectWithValue(message);
		} else {
			console.log(error);
		}
	}
});

export const login = createAsyncThunk('auth/login', async (user: AuthRequest, { rejectWithValue }) => {
	try {
		const { data } = await axios.post(API_USERS_URL + 'login', user);

		if (data) {
			localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
			localStorage.setItem('userToken', data.userToken);
		}

		return data;
	} catch (error) {
		if (error instanceof Error) {
			const message = `This is error ${error.message}`;
			return rejectWithValue(message);
		} else {
			console.log(error);
		}
	}
});

export const logout = createAsyncThunk('auth/logout', async () => {
	localStorage.removeItem('userInfo');
	localStorage.removeItem('userToken');
	toast.success('Goodbye!');
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.userToken = action.payload.userToken;
				state.userInfo = action.payload.userInfo;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.userToken = null;
				state.userInfo = null;
				state.message = action.error?.message || 'Unknown error';
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.userToken = action.payload.userToken;
				state.userInfo = action.payload.userInfo;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.userToken = null;
				state.userInfo = null;
				state.message = action.error?.message || 'Unknown error';
			})
			.addCase(logout.fulfilled, (state) => {
				state.userToken = null;
				state.userInfo = null;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
