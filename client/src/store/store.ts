import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { auctionQuery } from 'store/queries/auctionQuery';
import authReducer from 'store/slices/authSlice';

export const store = configureStore({
	reducer: {
		authSlice: authReducer,
		[auctionQuery.reducerPath]: auctionQuery.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(auctionQuery.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
