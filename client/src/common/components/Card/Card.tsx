import { render } from '@testing-library/react';
import Button from 'common/components/Button';
import Countdown, { zeroPad } from 'react-countdown';
import { useEffect, useState } from 'react';

import {
	CardContainer,
	CardImg,
	AlbumName,
	ArtistName,
	StaticContainer,
	SpotifyIconButton,
	CountdownTitle,
	CountdownComponent,
	BidContainer,
	BidLast,
	Bid,
} from './Card.styles';
import useLocalStorageGet from 'common/hooks/useLocalStorageGet';

interface ICountdown {
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}

interface ICard {
	albumCover: string;
	albumName: string;
	artistName: string;
	countdownTitle?: string;
	countdown?: string;
	bidLast?: string;
	buttonText?: string;
	setPreviewUrl: () => void;
	spotifyButtonText: string;
}

const Card = ({
	albumCover,
	albumName,
	artistName,
	setPreviewUrl,
	countdownTitle,
	countdown,
	bidLast,
	buttonText,
	spotifyButtonText,
}: ICard) => {
	const renderer = ({ hours, minutes, seconds, completed }: ICountdown) => {
		if (completed) {
			return <span>Sold.</span>;
		} else {
			return (
				<span>
					{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
				</span>
			);
		}
	};

	return (
		<CardContainer>
			<CardImg src={albumCover}></CardImg>
			<AlbumName>{albumName}</AlbumName>
			<ArtistName>{artistName}</ArtistName>
			<StaticContainer>
				<SpotifyIconButton onClick={setPreviewUrl}>{spotifyButtonText}</SpotifyIconButton>
				<CountdownTitle>{(countdownTitle = 'Time Remaining')}</CountdownTitle>
				<CountdownComponent>
					<Countdown date={Date.now() + 900000} renderer={renderer}></Countdown>
				</CountdownComponent>
				<BidContainer>
					<BidLast>{(bidLast = `Last Bid $${randomBid(50, 500)}`)}</BidLast>
					<Bid>
						<Button variant='secondary'>{(buttonText = 'Place Bid')}</Button>
					</Bid>
				</BidContainer>
			</StaticContainer>
		</CardContainer>
	);
};

export default Card;

function randomBid(min: number, max: number) {
	const randomBid = Math.floor(Math.random() * (max - min + 1) + min);
	return Math.ceil(randomBid / 5) * 5;
}
