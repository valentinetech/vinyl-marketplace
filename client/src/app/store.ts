import { apiSlice } from 'features/Dashboard/api/apiSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/store/authSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import auctionReducer from 'features/Dashboard/store/auctionSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
// setupListeners(store.dispatch);
// Store Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
