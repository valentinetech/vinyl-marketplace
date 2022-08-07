import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import authService, { LoginProps, RegisterProps } from './authService';

// const userToken = localStorage.getItem('token') ? localStorage.getItem('token') : null;

interface UserPayload {
	userInfo: {
		_id: string;
		username: string;
		email: string;
	} | null;
	userToken: string;
}

interface UserState {
	userInfo: {
		_id: string;
		username: string;
		email: string;
	} | null;
	userToken: string | null;
}

interface AuthState extends UserState {
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	message: string;
}

const initialState: AuthState = {
	userToken: null,
	userInfo: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const register = createAsyncThunk('auth/register', async (user: RegisterProps, { rejectWithValue }) => {
	try {
		return await authService.register(user);
	} catch (error: any) {
		const message: string = error.response.data.message;
		return rejectWithValue(message);
	}
});

export const login = createAsyncThunk('auth/login', async (user: LoginProps, { rejectWithValue }) => {
	try {
		return await authService.login(user);
	} catch (error: any) {
		const message: string = error.response.data.message;
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
			.addCase(register.fulfilled, (state, action: PayloadAction<UserPayload>) => {
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
			.addCase(login.fulfilled, (state, action: PayloadAction<UserPayload>) => {
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
