export interface IAuctionRequest {
	_id?: string;
	userId: string;
	albumCover: string;
	albumName: string;
	artistName: string;
	buyNowPrice?: number | string;
	endDate: string;
	minBid?: number | string;
	isBought?: boolean;
	lastBid?: number | string;
	updatedAt?: string;
	createdAt?: string;
	userBids?: IUserBids[];
}

export interface IAuctionEdit {
	_id: string;
	albumCoverEdited: string;
	albumNameEdited: string;
	artistNameEdited: string;
	endDateEdited: string;
	userBids?: IUserBids[];
}

export interface IAuction {
	_id?: string;
	userId: string;
	albumCover: string;
	albumName: string;
	artistName: string;
	buyNowPrice: number | string;
	minBid: number | string;
	isBought?: boolean;
	lastBid?: number | string;
	endDate: string;
	updatedAt?: string;
	createdAt?: string;
	userBids?: IUserBids[];
}

export interface IUserBids {
	userId: string;
	userBid: number;
}
