import styled from 'styled-components';
import spotifyImage from 'assets/spotify.png';
import { theme } from 'common/styles/theme';
import { AiFillEdit } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

export {
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
	DeleteIcon,
	EditIcon,
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
	min-height: 640px;
	position: relative;
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
	text-align: center;
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
const CountdownComponent = styled.p`
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

const DeleteIcon = styled(FaTimes)`
	color: ${theme.colors.close};
	position: absolute;
	top: 10px;
	right: 8px;
	cursor: pointer;
	outline: none;
`;

const EditIcon = styled(AiFillEdit)`
	color: ${theme.colors.white};
	position: absolute;
	top: 10px;
	left: 8px;
	cursor: pointer;
	outline: none;
`;
