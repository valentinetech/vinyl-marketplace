import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Get user from localStorage

const user = localStorage.getItem('user');

interface StateProps {
  isLoading: boolean;
  isSucces: boolean;
  isError: boolean;
  message: string;
}

const initialState = {
  user: null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: '',
};

// Register user

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state: StateProps) => {
      state.isLoading = false;
      state.isSucces = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
