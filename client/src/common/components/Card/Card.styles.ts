import styled from 'styled-components';
import spotifyImage from 'assets/spotify.png';
import { theme } from 'common/styles/theme';

export {
	CardContainer,
	CardImg,
	AlbumName,
	ArtistName,
	StaticContainer,
	SpotifyIconButton,
	CountdownTitle,
	Countdown,
	BidContainer,
	BidLast,
	Bid,
};

const CardContainer = styled.div`
	height: auto;
	width: 350px;
	border: 1px solid #fff;
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 1%;
`;

const CardImg = styled.img`
	width: 250px;
	height: 250px;
`;

const AlbumName = styled.h3`
	text-align: center;
	margin-top: 10px;
`;

const ArtistName = styled.h4`
	font-weight: 300;
`;

const StaticContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const SpotifyIconButton = styled.button`
	margin-top: 20px;
	height: 50px;
	width: 50px;
	background-image: url(${spotifyImage});
	background-repeat: no-repeat;
	background-size: 50px;
	background-color: transparent;
	color: ${theme.colors.white};
	font-size: 20px;
	cursor: pointer;

	&:hover {
		color: ${theme.colors.white};
		font-size: 25px;
		transition: all 0.5s;
	}
`;

const CountdownTitle = styled.h6`
	text-align: center;
	margin-top: 20px;
`;
const Countdown = styled.p`
	text-align: center;
	font-size: 20px;
	color: ${theme.colors.brand};
`;

const BidContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	margin-top: 20px;
	padding-left: 10px;
	padding-right: 10px;
`;

const BidLast = styled.h6`
	width: 50%;
	font-size: 21px;
	color: ${theme.colors.brandSecondary};
`;

const Bid = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
`;
