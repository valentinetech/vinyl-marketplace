import type { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { login, register } from 'store/thunks/authThunks';
import { describe, expect, it, vi } from 'vitest';
import { sessionStorageMock } from 'vitest.setup';
import { authSlice, logout, reset } from './authSlice';
import { AuthState, UserResponse } from './authSlice.models';

vi.mock('react-toastify', () => ({
	toast: {
		success: vi.fn(),
	},
}));

describe('authSlice', () => {
	const initialState: AuthState = {
		userId: '',
		userToken: '',
		isLoading: false,
		isSuccess: false,
		isError: false,
	};

	it('should handle reset', () => {
		const previousState: AuthState = {
			userId: '123',
			userToken: 'token123',
			isLoading: true,
			isSuccess: true,
			isError: false,
		};
		const state = authSlice.reducer(previousState, reset());
		expect(state).toEqual(initialState);
	});

	it('should handle logout', () => {
		const previousState: AuthState = {
			userId: '123',
			userToken: 'token123',
			isLoading: false,
			isSuccess: true,
			isError: false,
		};
		const state = authSlice.reducer(previousState, logout());
		expect(state).toEqual({
			...initialState,
			isSuccess: false,
			isLoading: false,
		});
		expect(sessionStorageMock.removeItem).toHaveBeenCalledWith('userId');
		expect(sessionStorageMock.removeItem).toHaveBeenCalledWith('userToken');
		expect(sessionStorageMock.removeItem).toHaveBeenCalledWith('username');
		expect(toast.success).toHaveBeenCalledWith('Goodbye!');
	});

	describe('extraReducers', () => {
		it('should handle register.pending', () => {
			const action = { type: register.pending.type };
			const state = authSlice.reducer(initialState, action);
			expect(state.isLoading).toBe(true);
			expect(state.isSuccess).toBe(false);
			expect(state.isError).toBe(false);
		});

		it('should handle register.fulfilled', () => {
			const payload: UserResponse = { userId: '123', userToken: 'token123' };
			const action: PayloadAction<UserResponse> = { type: register.fulfilled.type, payload };
			const state = authSlice.reducer(initialState, action);
			expect(state.userId).toBe(payload.userId);
			expect(state.userToken).toBe(payload.userToken);
			expect(state.isLoading).toBe(false);
			expect(state.isSuccess).toBe(true);
			expect(state.isError).toBe(false);
		});

		it('should handle register.rejected', () => {
			const action = { type: register.rejected.type };
			const state = authSlice.reducer(initialState, action);
			expect(state.isLoading).toBe(false);
			expect(state.isSuccess).toBe(false);
			expect(state.isError).toBe(true);
		});

		it('should handle login.pending', () => {
			const action = { type: login.pending.type };
			const state = authSlice.reducer(initialState, action);
			expect(state.isLoading).toBe(true);
		});

		it('should handle login.fulfilled', () => {
			const payload: UserResponse = { userId: '123', userToken: 'token123' };
			const action: PayloadAction<UserResponse> = { type: login.fulfilled.type, payload };
			const state = authSlice.reducer(initialState, action);
			expect(state.userId).toBe(payload.userId);
			expect(state.userToken).toBe(payload.userToken);
			expect(state.isLoading).toBe(false);
			expect(state.isSuccess).toBe(true);
			expect(state.isError).toBe(false);
		});

		it('should handle login.rejected', () => {
			const action = { type: login.rejected.type };
			const state = authSlice.reducer(initialState, action);
			expect(state.isLoading).toBe(false);
			expect(state.isSuccess).toBe(false);
			expect(state.isError).toBe(true);
		});
	});
});
