import Button from 'common/components/Button';
import unknownAlbumCover from 'assets/album-cover-unknown.png';
import { useDeleteAuctionMutation, useUpdateAuctionMutation } from 'features/Dashboard/api/apiSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ICard } from './Card.models';
import { useNavigate } from 'react-router-dom';
import {
	CardContainer,
	CardImg,
	AlbumName,
	ArtistName,
	StaticContainer,
	SpotifyIconButton,
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
import useLocalStorageGetUserInfo from 'common/hooks/useLocalStorageGetUserInfo';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

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

	/* Generic */
	const navigate = useNavigate();

	/* Countdown */
	const [isSold, setIsSold] = useState<boolean>(false);

	/* Delete Action */
	const [deleteAuction] = useDeleteAuctionMutation();
	const onDelete = () => {
		deleteAuction(currentId);
		toast.success('Auction deleted.');
	};

	/* Edit Action */
	const [editedData, setEditedData] = useState<IAuctionEdit>({
		_id: currentId,
		albumCoverEdited: albumCover,
		albumNameEdited: albumName,
		artistNameEdited: artistName,
		endDateEdited: endDate,
	});

	const userId = useLocalStorageGetUserInfo();
	const [editAuction] = useUpdateAuctionMutation();
	const [isActive, toggle] = useToggle(false);
	const { albumNameEdited, artistNameEdited, endDateEdited, albumCoverEdited } = editedData;
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
			{canDelete === true ? <DeleteIcon aria-label="delete auction" onClick={onDelete} size={32} /> : null}
			{canEdit === true && isActive === false ? (
				<EditIcon aria-label="edit auction" onClick={toggle} size={32} />
			) : null}
			{canEdit === true && isActive === true ? (
				<SaveEditIcon aria-label="save edit" onClick={onSubmit} size={32} />
			) : null}
			<CardImg src={albumCover ? albumCover : albumCoverEdited} alt={albumName ? albumName : albumNameEdited}></CardImg>
			{isActive ? (
				<input type="text" id="albumNameEdited" placeholder={albumName} onChange={onChange} />
			) : (
				<AlbumName>{albumName}</AlbumName>
			)}
			{isActive ? (
				<input type="text" id="artistNameEdited" placeholder={artistName} onChange={onChange} />
			) : (
				<ArtistName>{artistName}</ArtistName>
			)}
			<StaticContainer>
				<>{setPreviewUrl && <SpotifyIconButton onClick={setPreviewUrl}>{spotifyButtonText}</SpotifyIconButton>}</>
				<CountdownTimer endDate={endDate} setIsSold={setIsSold} />
				{isSold ? (
					<EmptyDiv></EmptyDiv>
				) : (
					<>
						<BidContainer>
							<BidLast>Last Bid ${bidLast}</BidLast>
							<Bid>
								<Button variant="secondary" onClick={() => navigate('/login')}>
									Place Bid
								</Button>
							</Bid>
						</BidContainer>
						{canBuyNow ? (
							<Button style={{ marginTop: '10px' }} variant="primary" onClick={() => navigate('/login')}>
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
