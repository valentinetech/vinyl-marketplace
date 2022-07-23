import axios from 'axios';

// Need to make it dependant on prod and dev
const API_URL = 'http://localhost:9090/api/users/';

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
  const response = await axios.post(API_URL, userData);

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
