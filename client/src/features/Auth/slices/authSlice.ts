import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import authService, { LoginProps, RegisterProps } from './authService';

const userTokenStorage = localStorage.getItem('token');

interface AuthState {
	userToken: string | null;
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	message: string;
}

const initialState: AuthState = {
	userToken: userTokenStorage ? userTokenStorage : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const register = createAsyncThunk('auth/register', async (user: RegisterProps, { rejectWithValue }) => {
	try {
		return await authService.register(user);
	} catch (error: any) {
		return rejectWithValue(error);
	}
});

export const login = createAsyncThunk('auth/login', async (user: LoginProps, { rejectWithValue }) => {
	try {
		return await authService.login(user);
	} catch (error: any) {
		const message = error.response.data.message;
		return rejectWithValue(message);
	}
});

export const logout = createAsyncThunk('auth/logout', async () => {
	return await authService.logout();
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
			.addCase(register.fulfilled, (state, action: PayloadAction<string>) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.userToken = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload as string;
				state.userToken = null;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.userToken = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload as string;
				state.userToken = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.userToken = null;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
