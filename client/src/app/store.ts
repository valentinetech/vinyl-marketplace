// Hook imports
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// Store imports
import { configureStore } from '@reduxjs/toolkit';
// Slices
import authReducer from 'features/Auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Store Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
