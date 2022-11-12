import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from 'config/config';
import { toast } from 'react-toastify';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_USERS_URL = API_URL + '/api/users/';

export interface AuctionRequest {
	user: User | null;
	albumCover: string;
	album: string;
	artist: string;
	buyNowPrice: number;
	minBid: number;
	isBought?: boolean;
	lastBid?: number;
	timeLeft?: number;
}

interface User {
	userInfo: UserInfo | null;
	userToken: string;
}

interface UserInfo {
	_id: string;
	username: string;
	email: string;
}

interface AuctionState extends AuctionRequest {
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	message: string;
}

const initialState: AuctionState = {
	user: null,
	albumCover: '',
	album: '',
	artist: '',
	buyNowPrice: 0,
	minBid: 5,
	isBought: false,
	lastBid: 0,
	timeLeft: 900000,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const createAuction = createAsyncThunk('auction/createAuction', async (user: User, { rejectWithValue }) => {
	try {
		const { data } = await axios.post(API_USERS_URL + 'register', user);

		if (data) {
			localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
			localStorage.setItem('userToken', data.userToken);
		}
		return data;
	} catch (error: any) {
		const message: string = error.response.data.message;
		return rejectWithValue(message);
	}
});

// export const auctionSlice = createSlice({
// 	name: 'auction',
// 	initialState,
// 	reducers: {
// 		reset: () => initialState,
// 	},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(register.pending, (state) => {
// 				state.isLoading = true;
// 			})
// 			.addCase(register.fulfilled, (state, action: PayloadAction<UserPayload>) => {
// 				state.isLoading = false;
// 				state.isSuccess = true;
// 				state.userToken = action.payload.userToken;
// 				state.userInfo = action.payload.userInfo;
// 			})
// 			.addCase(register.rejected, (state, action) => {
// 				state.isLoading = false;
// 				state.isError = true;
// 				state.userToken = null;
// 				state.userInfo = null;
// 				state.message = action.error?.message || 'Unknown error';
// 			})
// 			.addCase(login.pending, (state) => {
// 				state.isLoading = true;
// 			})
// 			.addCase(login.fulfilled, (state, action: PayloadAction<UserPayload>) => {
// 				state.isLoading = false;
// 				state.isSuccess = true;
// 				state.userToken = action.payload.userToken;
// 				state.userInfo = action.payload.userInfo;
// 			})
// 			.addCase(login.rejected, (state, action) => {
// 				state.isLoading = false;
// 				state.isError = true;
// 				state.userToken = null;
// 				state.userInfo = null;
// 				state.message = action.error?.message || 'Unknown error';
// 			})
// 			.addCase(logout.fulfilled, (state) => {
// 				state.userToken = null;
// 				state.userInfo = null;
// 			});
// 	},
// });

// export const { reset } = auctionSlice.actions;
// export default auctionSlice.reducer;
