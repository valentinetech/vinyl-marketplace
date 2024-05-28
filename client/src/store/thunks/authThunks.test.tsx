import axios from 'axios';
import { SessionStorageMockTypes } from 'common/models/test.models';
import { API_USERS_URL } from 'config/config';
import { AuthLoginRequest, AuthRegisterRequest, UserResponse } from 'store/slices/authSlice.models';
import { describe, expect, it, vi } from 'vitest';
import { login, register } from './authThunks';
vi.mock('axios');

describe('auth thunks', () => {
	let sessionStorageMock: SessionStorageMockTypes;
	beforeEach(() => {
		sessionStorageMock = {
			getItem: vi.fn(),
			setItem: vi.fn(),
			removeItem: vi.fn(),
			clear: vi.fn(),
		};
		Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });
	});
	afterEach(() => {
		vi.clearAllMocks();
	});

	describe('register', () => {
		it('should register a user and store userId and userToken in sessionStorage', async () => {
			const mockUser: AuthRegisterRequest = { username: 'testuser', password: 'testpass', email: 'test@test.t' };
			const mockResponse: UserResponse = { userId: '123', userToken: 'token123' };

			vi.spyOn(axios, 'post').mockResolvedValueOnce({ data: mockResponse });

			const thunk = register(mockUser);
			const dispatch = vi.fn();
			const getState = vi.fn();

			const result = await thunk(dispatch, getState, undefined);

			expect(axios.post).toHaveBeenCalledWith(API_USERS_URL + 'register', mockUser);
			expect(result.payload).toEqual(mockResponse);
			expect(sessionStorageMock.setItem).toHaveBeenCalledWith('userId', mockResponse.userId);
			expect(sessionStorageMock.setItem).toHaveBeenCalledWith('userToken', mockResponse.userToken);
		});

		it('should handle invalid response data during registration', async () => {
			const mockUser: AuthRegisterRequest = { username: 'testuser', password: 'testpass', email: 'test@test.t' };
			const invalidResponse = {}; // Empty object to simulate invalid response

			vi.spyOn(axios, 'post').mockResolvedValueOnce({ data: invalidResponse });

			const thunk = register(mockUser);
			const dispatch = vi.fn();
			const getState = vi.fn();

			const result = await thunk(dispatch, getState, undefined);

			expect(axios.post).toHaveBeenCalledWith(API_USERS_URL + 'register', mockUser);
			expect(result.payload).toEqual('Invalid response data');
			expect(sessionStorageMock.setItem).not.toHaveBeenCalled();
		});

		it('should handle errors during registration', async () => {
			const mockUser: AuthRegisterRequest = { username: 'testuser', password: 'testpass', email: 'test@test.t' };
			const mockError = new Error('Registration failed');

			vi.spyOn(axios, 'post').mockRejectedValueOnce(mockError);

			const thunk = register(mockUser);
			const dispatch = vi.fn();
			const getState = vi.fn();

			const result = await thunk(dispatch, getState, undefined);

			expect(axios.post).toHaveBeenCalledWith(API_USERS_URL + 'register', mockUser);
			expect(result.payload).toEqual('Registration failed');
			expect(sessionStorageMock.setItem).not.toHaveBeenCalled();
		});
		it('should handle non-Error exceptions during registration', async () => {
			const mockUser: AuthRegisterRequest = { username: 'testuser', password: 'testpass', email: 'test@test.t' };
			const mockError = 'Non-Error exception';

			vi.spyOn(axios, 'post').mockRejectedValueOnce(mockError);

			const thunk = register(mockUser);
			const dispatch = vi.fn();
			const getState = vi.fn();

			const result = await thunk(dispatch, getState, undefined);

			expect(axios.post).toHaveBeenCalledWith(API_USERS_URL + 'register', mockUser);
			expect(result.payload).toEqual('An unknown error occurred');
			expect(sessionStorageMock.setItem).not.toHaveBeenCalled();
		});
	});

	describe('login', () => {
		it('should login a user and store userId and userToken in sessionStorage', async () => {
			const mockUser: AuthLoginRequest = { username: 'testuser', password: 'testpass' };
			const mockResponse: UserResponse = { userId: '123', userToken: 'token123' };

			vi.spyOn(axios, 'post').mockResolvedValueOnce({ data: mockResponse });

			const thunk = login(mockUser);
			const dispatch = vi.fn();
			const getState = vi.fn();

			const result = await thunk(dispatch, getState, undefined);

			expect(axios.post).toHaveBeenCalledWith(API_USERS_URL + 'login', mockUser);
			expect(result.payload).toEqual(mockResponse);
			expect(sessionStorageMock.setItem).toHaveBeenCalledWith('userId', mockResponse.userId);
			expect(sessionStorageMock.setItem).toHaveBeenCalledWith('userToken', mockResponse.userToken);
		});

		it('should handle invalid response data during login', async () => {
			const mockUser: AuthLoginRequest = { username: 'testuser', password: 'testpass' };
			const invalidResponse = {}; // Empty object to simulate invalid response

			vi.spyOn(axios, 'post').mockResolvedValueOnce({ data: invalidResponse });

			const thunk = login(mockUser);
			const dispatch = vi.fn();
			const getState = vi.fn();

			const result = await thunk(dispatch, getState, undefined);

			expect(axios.post).toHaveBeenCalledWith(API_USERS_URL + 'login', mockUser);
			expect(result.payload).toEqual('Invalid response data');
			expect(sessionStorageMock.setItem).not.toHaveBeenCalled();
		});

		it('should handle errors during login', async () => {
			const mockUser: AuthLoginRequest = { username: 'testuser', password: 'testpass' };
			const mockError = new Error('Login failed');

			vi.spyOn(axios, 'post').mockRejectedValueOnce(mockError);

			const thunk = login(mockUser);
			const dispatch = vi.fn();
			const getState = vi.fn();

			const result = await thunk(dispatch, getState, undefined);

			expect(axios.post).toHaveBeenCalledWith(API_USERS_URL + 'login', mockUser);
			expect(result.payload).toEqual('Login failed');
			expect(sessionStorageMock.setItem).not.toHaveBeenCalled();
		});
		it('should handle non-Error exceptions during login', async () => {
			const mockUser: AuthLoginRequest = { username: 'testuser', password: 'testpass' };
			const mockError = 'Non-Error exception';

			vi.spyOn(axios, 'post').mockRejectedValueOnce(mockError);

			const thunk = login(mockUser);
			const dispatch = vi.fn();
			const getState = vi.fn();

			const result = await thunk(dispatch, getState, undefined);

			expect(axios.post).toHaveBeenCalledWith(API_USERS_URL + 'login', mockUser);
			expect(result.payload).toEqual('An unknown error occurred');
			expect(sessionStorageMock.setItem).not.toHaveBeenCalled();
		});
	});
});
