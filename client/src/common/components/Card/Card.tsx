import Button from 'common/components/Button';
import Countdown, { zeroPad } from 'react-countdown';
import unknownAlbumCover from 'assets/album-cover-unknown.png';
import { useDeleteAuctionMutation, useUpdateAuctionMutation } from 'features/Dashboard/api/apiSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ICard, ICountdown } from './Card.models';
import useLocalStorageGet from 'common/hooks/useLocalStorageGet';
import { useNavigate } from 'react-router-dom';
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
	DeleteIcon,
	EditIcon,
	EmptyDiv,
	SaveEditIcon,
} from './Card.styles';
import useToggle from '../../hooks/useToggle';
import { IAuctionEdit } from 'features/Dashboard/api/api.models';
import useSpotifySearch from 'common/hooks/useSpotifySearch';

const Card = (props: ICard) => {
	const {
		albumCover = unknownAlbumCover,
		albumName = 'Album Name',
		artistName = 'Artist Name',
		setPreviewUrl,
		endDate = '',
		bidLast = 50,
		spotifyButtonText = '▮',
		canDelete = false,
		canEdit = false,
		canBuyNow = false,
		currentId = '',
	} = props;

	const navigate = useNavigate();

	// Countdown
	const [isSold, setIsSold] = useState<boolean>(false);
	const renderer = ({ days, hours, minutes, seconds, completed }: ICountdown) => {
		if (completed) {
			setIsSold(completed);

			return <span style={{ color: '#F45B69', fontWeight: 'bold' }}>Auction closed.</span>;
		} else {
			return (
				<>
					{days ? (
						<span>
							{zeroPad(days)} : {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
						</span>
					) : (
						<span>
							{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
						</span>
					)}
				</>
			);
		}
	};

	const dateToString = endDate?.toString();
	const endDateFormated = new Date(dateToString);
	const endDateMili = endDateFormated.getTime();
	const randomDateMili = Date.now() + 900000;

	// Delete Action
	const [deleteAuction] = useDeleteAuctionMutation();
	function onDelete() {
		deleteAuction(currentId);
		toast.success('Auction deleted.');
	}

	// Edit Action
	const [editAuction] = useUpdateAuctionMutation();
	const [userId] = useLocalStorageGet();
	const [isActive, toggle] = useToggle(false);

	const [editedData, setEditedData] = useState<IAuctionEdit>({
		_id: currentId,
		albumCoverEdited: albumCover,
		albumNameEdited: albumName,
		artistNameEdited: artistName,
		endDateEdited: endDate,
	});

	const { albumNameEdited, artistNameEdited, endDateEdited, albumCoverEdited } = editedData;

	//Search Cover Image from Spotify
	const [, , albumCoverQuery] = useSpotifySearch(albumNameEdited && artistNameEdited);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setEditedData({
			_id: currentId,
			albumCoverEdited: albumCoverQuery,
			albumNameEdited: albumNameEdited,
			artistNameEdited: artistNameEdited,
			endDateEdited: endDateEdited,
			[e.target.id]: e.target.value,
		});
	};

	const onSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();

		const editedAuction = {
			_id: currentId,
			albumCover: albumCoverQuery,
			albumName: albumNameEdited,
			artistName: artistNameEdited,
			endDate: endDateEdited,
			userId: userId,
		};
		editAuction(editedAuction);
		toggle();
		toast.success('Auction edited successfully');
	};

	return (
		<CardContainer>
			{canDelete === true ? <DeleteIcon aria-label='delete auction' onClick={onDelete} size={32} /> : null}
			{canEdit === true && isActive === false ? (
				<EditIcon aria-label='edit auction' onClick={toggle} size={32} />
			) : null}
			{canEdit === true && isActive === true ? (
				<SaveEditIcon aria-label='save edit' onClick={onSubmit} size={32} />
			) : null}
			<CardImg src={albumCover ? albumCover : albumCoverEdited} alt={albumName ? albumName : albumNameEdited}></CardImg>
			{isActive ? (
				<input type='text' id='albumNameEdited' placeholder={albumName} onChange={onChange} />
			) : (
				<AlbumName>{albumName}</AlbumName>
			)}
			{isActive ? (
				<input type='text' id='artistNameEdited' placeholder={artistName} onChange={onChange} />
			) : (
				<ArtistName>{artistName}</ArtistName>
			)}
			<StaticContainer>
				<>{setPreviewUrl && <SpotifyIconButton onClick={setPreviewUrl}>{spotifyButtonText}</SpotifyIconButton>}</>
				<CountdownTitle>Time Remaining</CountdownTitle>
				<CountdownComponent>
					<Countdown date={endDateMili ? endDateMili : randomDateMili} renderer={renderer}></Countdown>
				</CountdownComponent>
				{isSold ? (
					<EmptyDiv></EmptyDiv>
				) : (
					<>
						<BidContainer>
							<BidLast>Last Bid ${bidLast}</BidLast>
							<Bid>
								<Button variant='secondary' onClick={() => navigate('/login')}>
									Place Bid
								</Button>
							</Bid>
						</BidContainer>
						{canBuyNow ? (
							<Button style={{ marginTop: '10px' }} variant='primary' onClick={() => navigate('/login')}>
								Buy Now
							</Button>
						) : null}
					</>
				)}
			</StaticContainer>
		</CardContainer>
	);
};

export default Card;
