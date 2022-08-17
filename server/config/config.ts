import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL ?? '';

const PORT = process.env.PORT ?? 6000;
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME ?? 3700;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER ?? 'coolIssuer';
export const JWT_TOKEN = process.env.JWT_TOKEN ?? 'crazySecret2';

export const config = {
	mongo: {
		url: MONGO_URL,
	},
	server: {
		port: PORT,
		token: {
			expireTime: SERVER_TOKEN_EXPIRETIME,
			issuer: SERVER_TOKEN_ISSUER,
			secret: JWT_TOKEN,
		},
	},
};
