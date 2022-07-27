import axios from 'axios';

const API_URL = process.env.dev ? 'http://localhost:9090/api/users/' : 'https://livewebsite.com/api/users';

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
  const response = await axios.post(API_URL + 'register', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData: LoginProps) => {
  const response = await axios.post(API_URL + 'login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
