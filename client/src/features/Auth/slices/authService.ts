import { toast } from 'react-toastify';
import axios from 'axios';
import { API_USER_URL } from 'config/config';

export interface RegisterProps {
	username: string;
	email: string;
	password: string;
}

export interface LoginProps {
	username: string;
	password: string;
}

const register = async (userData: RegisterProps) => {
	const { data } = await axios.post(API_USER_URL + 'register', userData);

	if (data) {
		localStorage.setItem('user', JSON.stringify(data.user));
		localStorage.setItem('token', data.token);
		localStorage.setItem('username', data.user.username);
		localStorage.setItem('email', data.user.email);
	}
	return data.user;
};

const login = async (userData: LoginProps) => {
	const { data } = await axios.post(API_USER_URL + 'login', userData);

	if (data) {
		localStorage.setItem('user', JSON.stringify(data.user));
		localStorage.setItem('token', data.token);
		localStorage.setItem('_id', data.user._id);
		localStorage.setItem('username', data.user.username);
		localStorage.setItem('email', data.user.email);
	}

	return data.user;
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
