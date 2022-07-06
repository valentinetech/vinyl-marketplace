import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Get user from localStorage

const user = localStorage.getItem('user');

interface StateProps {
  user: string | null;
  isLoading: boolean;
  isSucces: boolean;
  isError: boolean;
  message: string;
}

const initialState: StateProps = {
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
    reset: () => initialState,
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
