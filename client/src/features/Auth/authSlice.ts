import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import authService, { LoginProps, RegisterProps } from './authService';

//Get user from localStorage
const user = localStorage.getItem('user');

interface AuthState {
  user: string | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string | unknown;
}

const initialState: AuthState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const register = createAsyncThunk('auth/register', async (user: RegisterProps, { rejectWithValue }) => {
  try {
    return await authService.register(user);
  } catch (error: unknown) {
    return rejectWithValue(error);
  }
});

export const login = createAsyncThunk('auth/login', async (user: LoginProps, { rejectWithValue }) => {
  try {
    return await authService.login(user);
  } catch (error: unknown) {
    return rejectWithValue(error);
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
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
