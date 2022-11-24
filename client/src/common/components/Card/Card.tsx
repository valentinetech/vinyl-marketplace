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
} from './Card.styles';
import useToggle from '../../hooks/useToggle';
import { IAuctionEdit } from 'features/Dashboard/models/api.models';

const Card = (props: ICard) => {
	const {
		albumCover = unknownAlbumCover,
		albumName = 'Album Name',
		artistName = 'Artist Name',
		setPreviewUrl,
		endDate = '',
		bidLast = '50',
		spotifyButtonText = '▮',
		canDelete = false,
		canEdit = false,
		canBuyNow = false,
		currentId = '',
	} = props;

	const navigate = useNavigate();

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

	const [deleteAuction] = useDeleteAuctionMutation();

	function onDelete() {
		deleteAuction(currentId);
		toast.success('Auction deleted.');
	}

	const [editAuction] = useUpdateAuctionMutation();
	const [userId] = useLocalStorageGet();

	const [editedData, setEditedData] = useState<IAuctionEdit>({
		_id: currentId,
		albumCoverEdited: albumCover,
		albumNameEdited: '',
		artistNameEdited: artistName,
		endDateEdited: endDate,
	});

	const { albumNameEdited, artistNameEdited, endDateEdited, albumCoverEdited } = editedData;
	console.log('albumNameEdited :', albumNameEdited);

	console.log('editedData :', editedData);

	function onEdit() {
		console.log('edited');
		editAuction({
			_id: currentId,
			albumCover: albumCoverEdited,
			albumName: albumNameEdited,
			artistName: artistNameEdited,
			endDate: endDateEdited,
			userId: userId,
		});
		toggle();
	}
	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setEditedData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		const editedAuction = {
			_id: currentId,
			albumCover: albumCoverEdited,
			albumName: albumNameEdited,
			artistName: artistNameEdited,
			endDate: endDateEdited,
			userId: userId,
		};
		await editAuction(editedAuction);

		await toggle();
	};

	// function onBid() {
	// 	console.log('edited');
	// 	editAuction({
	// 		_id: currentId,
	// 		userBids: [
	// 			...currentBids,
	// 			{
	// 				userId: userId,
	// 				userBid: 99,
	// 			},
	// 		],
	// 	});
	// }

	const [isActive, toggle] = useToggle(false);
	console.log('isActive :', isActive);
	// Button for submit edit that send onEdit to server
	// Edit toggles editable canEdit that toggles inputs
	return (
		<CardContainer>
			{canDelete === true ? <DeleteIcon aria-label='delete auction' onClick={onDelete} size={32} /> : null}
			{canEdit === true ? <EditIcon aria-label='edit auction' onClick={toggle} size={32} /> : null}
			<CardImg src={albumCover} alt={albumName}></CardImg>
			<AlbumName>{albumName}</AlbumName>
			{isActive ? (
				<>
					<input type='text' id='albumNameEdit' placeholder={albumName} onSubmit={onEdit} onChange={onChange} />
					<button onClick={onSubmit}>Submit</button>
				</>
			) : null}
			<ArtistName>{artistName}</ArtistName>
			<StaticContainer>
				<>{setPreviewUrl && <SpotifyIconButton onClick={setPreviewUrl}>{spotifyButtonText}</SpotifyIconButton>}</>
				<CountdownTitle>Time Remaining</CountdownTitle>
				<CountdownComponent>
					<Countdown date={endDateMili ? endDateMili : randomDateMili} renderer={renderer}></Countdown>
				</CountdownComponent>
				{isSold ? (
					<div style={{ height: '130px' }}></div>
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
