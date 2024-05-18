import { IUserBids } from 'features/Dashboard/api/api.models';

export interface ICountdown {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}

export interface ICard {
	albumCover: string;
	albumName: string;
	artistName: string;
	endDate?: string;
	bidLast?: number;
	buttonText?: string;
	setPreviewUrl?: () => void;
	spotifyButtonText?: string;
	currentId?: string;
	canDelete?: boolean;
	canEdit?: boolean;
	canBuyNow?: boolean;
	currentBids?: IUserBids[];
	currentUserId?: string;
	editName?: string;
}
