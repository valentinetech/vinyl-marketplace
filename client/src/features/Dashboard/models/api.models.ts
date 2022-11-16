import { createApi } from '@reduxjs/toolkit/query/react';
export interface IUserInfo {
	_id: string;
	username: string;
	email: string;
}

interface IUser {
	userInfo: IUserInfo | null;
	userToken: string;
}

export interface IAuctionRequest {
	_id?: string;
	userId: string;
	albumCover: string;
	album: string;
	artist: string;
	buyNowPrice: number;
	minBid: number;
	isBought?: boolean;
	lastBid?: number;
	timeLeft?: number;
}

export interface IAuction {
	_id?: string;
	userId: string;
	albumCover: string;
	album: string;
	artist: string;
	buyNowPrice: number;
	minBid: number;
	isBought?: boolean;
	lastBid?: number;
	timeLeft?: number;
	updatedAt: Date;
	createApi: Date;
}
