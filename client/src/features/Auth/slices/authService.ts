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

// const API_USERS_URL = API_URL + '/api/users/';
const API_USERS_URL = 'https://vinylauction.herokuapp.com/api/users/';

const register = async (userData: RegisterProps) => {
	const { data } = await axios.post(API_USERS_URL + 'register', userData);

	if (data) {
		localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
		localStorage.setItem('userToken', data.userToken);
	}
	return data;
};

const login = async (userData: LoginProps) => {
	const { data } = await axios.post(API_USERS_URL + 'login', userData);

	if (data) {
		localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
		localStorage.setItem('userToken', data.userToken);
	}

	return data;
};

const logout = () => {
	localStorage.removeItem('userInfo');
	localStorage.removeItem('userToken');
	toast.success('Goodbye!');
};

const authService = {
	register,
	login,
	logout,
};

export default authService;
