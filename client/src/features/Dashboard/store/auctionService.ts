import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from 'config/config';

export interface AuctionRequest {
	user: string;
	albumCover: string;
	album: string;
	artist: string;
	buyNowPrice: number;
	minBid: number;
	isBought?: boolean;
	lastBid?: number;
	timeLeft?: number;
}

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

const AuctionBody: AuctionRequest = {
	user: '',
	albumCover: '',
	album: '',
	artist: '',
	buyNowPrice: 0,
	minBid: 0,
	isBought: false,
	lastBid: 0,
	timeLeft: 0,
};
// createAuction,
// updateAuction,
// deleteAuction,
// getUserAuction,
// getAllAuctions,

const createAuction = async (AuctionBody: AuctionRequest) => {
	const { data } = await axios.post(API_USERS_URL + '/api/auctions', AuctionBody);

	if (data) {
		localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
		localStorage.setItem('userToken', data.userToken);
	}
	return data;
};

const auctionService = {
	createAuction,
	// updateAuction,
	// deleteAuction,
	// getUserAuction,
	// getAllAuctions,
};

export default auctionService;
