import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from 'config/config';

export interface RegisterProps {
	username: string;
	email: string;
	password: string;
}

export interface LoginProps {
	username: string;
	password: string;
}

const API_USERS_URL = API_URL + '/api/users/';

const register = async (userData: RegisterProps) => {
	const { data } = await axios.post(`${API_USERS_URL}register`, userData);

	if (data) {
		localStorage.setItem('user', JSON.stringify(data.user));
		localStorage.setItem('token', data.token);
		localStorage.setItem('username', data.user.username);
		localStorage.setItem('email', data.user.email);
	}
	return data.token;
};

const login = async (userData: LoginProps) => {
	const { data } = await axios.post(`${API_USERS_URL}login`, userData);

	if (data) {
		localStorage.setItem('user', JSON.stringify(data.user));
		localStorage.setItem('token', data.token);
		localStorage.setItem('_id', data.user._id);
		localStorage.setItem('username', data.user.username);
		localStorage.setItem('email', data.user.email);
	}

	return data.token;
};

const logout = () => {
	localStorage.removeItem('user');
	localStorage.removeItem('_id');
	localStorage.removeItem('token');
	localStorage.removeItem('username');
	localStorage.removeItem('email');
	toast.success('Goodbye!');
};

const authService = {
	register,
	login,
	logout,
};

export default authService;
