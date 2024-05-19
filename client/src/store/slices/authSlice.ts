import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { login, register } from 'store/thunks/authThunks';
import { AuthState, UserResponse } from './authSlice.models';

const initialState: AuthState = {
	userId: '',
	userToken: '',
	isLoading: false,
	isSuccess: false,
	isError: false,
};

export const authSlice = createSlice({
	name: 'authSlice',
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
