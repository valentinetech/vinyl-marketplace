export interface AuthLoginRequest {
	username: string;
	password: string;
}
export interface AuthRegisterRequest {
	username: string;
	password: string;
	email: string;
}

export interface UserResponse {
	userId: string;
	userToken: string;
}

export interface AuthState {
	userId: string;
	userToken: string;
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
}
