const devEnvUsersUrl = 'http://localhost:9090';
const prodEnvUrl = 'dont know yet';
const isDev = process.env.REACT_APP_LIVE;

export const API_URL = isDev ? devEnvUsersUrl : prodEnvUrl;

export const publicMenu = [
	{
		title: 'Explore',
		route: '/#explore',
	},
	{
		title: 'About',
		route: '/#about',
	},
];
export const protectedMenu = [
	{
		title: 'Explore',
		route: '/#explore',
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
