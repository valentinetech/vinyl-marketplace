import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const PORT = process.env.PORT || 5000;
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || 'coolIssuer';
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || 'superencryptedsecret';

export const config = {
	mongo: {
		url: MONGO_URL,
	},
	server: {
		port: PORT,
		token: {
			expireTime: SERVER_TOKEN_EXPIRETIME,
			issuer: SERVER_TOKEN_ISSUER,
			secret: SERVER_TOKEN_SECRET,
		},
	},
};
