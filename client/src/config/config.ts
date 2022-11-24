const PORT = 2000;
const devEnvUsersUrl = `http://localhost:${PORT}`;
const prodEnvUrl = 'https://vinyl-marketplace-production.up.railway.app';
const isDev = process.env.REACT_APP_LIVE === 'dev';

export const API_URL = isDev ? devEnvUsersUrl : prodEnvUrl;

export const publicMenu = [
	{
		title: 'Featured',
		route: '/#featured',
	},
	{
		title: 'About',
		route: '/#about',
	},
];
export const protectedMenu = [
	{
		title: 'Featured',
		route: '/#featured',
	},
	{
		title: 'About',
		route: '/#about',
	},
	{
		title: 'Profile',
		route: '/profile',
	},
	{
		title: 'Dashboard',
		route: '/dashboard',
	},
];

export const btnRoutes = {
	register: {
		title: 'Register',
		route: '/register',
	},
	login: {
		title: 'Login',
		route: '/login',
	},
	profile: {
		title: 'Profile',
		route: '/profile',
	},
};
