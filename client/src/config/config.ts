const PORT = 2000;
const devEnvUsersUrl = `http://localhost:${PORT}`;
const prodEnvUrl = 'https://vinyl-marketplace-production.up.railway.app';
const isDev = import.meta.env.VITE_ENV === 'dev';

export const API_URL = isDev ? devEnvUsersUrl : prodEnvUrl;
export const API_USERS_URL = API_URL + '/api/users/';
export const API_AUCTION_URL = API_URL + '/api/auctions/';
