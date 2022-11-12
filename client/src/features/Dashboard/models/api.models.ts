export interface UserInfo {
	_id: string;
	username: string;
	email: string;
}

interface User {
	userInfo: UserInfo | null;
	userToken: string;
}

export interface AuctionModel {
	_id: string;
	userId: User | null;
	albumCover: string;
	album: string;
	artist: string;
	buyNowPrice: number;
	minBid: number;
	isBought?: boolean;
	lastBid?: number;
	timeLeft?: number;
}

export interface AuctionSelect {
	auction: AuctionModel[];
}
