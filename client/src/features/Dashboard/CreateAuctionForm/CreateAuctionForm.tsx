import unknownAlbumCover from 'assets/album-cover-unknown.png';
import Button from 'common/components/Button';
import Card from 'common/components/Card';
import Input from 'common/components/Input';
import useSpotifySearch from 'common/hooks/useSpotifySearch';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IAuction } from '../../../store/queries/auctionQuery.models';

import { useCreateAuctionMutation } from 'store/queries/auctionQuery';
import {
	AuctionCreateChildren,
	AuctionCreateContainer,
	ButtonContainer,
	Form,
	FormGroup,
} from './CreateAuctionForm.styles';

const CreateAuctionForm = () => {
	const [formData, setFormData] = useState<IAuction>({
		userId: '',
		albumCover: '',
		albumName: '',
		artistName: '',
		buyNowPrice: '',
		minBid: 0,
		endDate: '',
		lastBid: 0,
		createdAt: new Date().toDateString(),
	});
	const { albumName, artistName, buyNowPrice, endDate, minBid } = formData;

	//Queries
	const [createAuction, { isLoading, isError, isSuccess }] = useCreateAuctionMutation();

	//Custom Hooks
	const userId = sessionStorage.getItem('userId') ?? '';
	const [, , albumCoverQuery] = useSpotifySearch(albumName || artistName);
	useEffect(() => {
		if (isSuccess) {
			toast.success('Auction created successfully');
		}

		if (isError) {
			toast.error('There is no such album...', { toastId: 'toastidError' });
		}
	}, [isLoading]);

	useEffect(() => {
		if (isLoading) {
			toast.loading('Creating New Auction...', { toastId: 'toastidNewAuction' });
		} else {
			toast.dismiss('toastidNewAuction');
		}
	}, [isLoading]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newAuction = {
			userId: userId,
			albumCover: albumCoverQuery,
			albumName: albumName,
			artistName: artistName,
			buyNowPrice: buyNowPrice,
			minBid: minBid,
			endDate: endDate,
			lastBid: randomIntFromInterval(minBid, 999),
		};
		createAuction(newAuction);
	};

	return (
		<>
			<AuctionCreateContainer>
				<AuctionCreateChildren>
					<h3>Create Auction</h3>
					<Form onSubmit={onSubmit}>
						<FormGroup>
							<Input type="text" id="albumName" value={albumName} placeholder="Album Name" onChange={onChange} />
							<Input type="text" id="artistName" value={artistName} placeholder="Artist Name" onChange={onChange} />
							<Input type="text" id="minBid" value={minBid} placeholder="Starting Bid" onChange={onChange} />
							<Input type="text" id="buyNowPrice" value={buyNowPrice} placeholder="Buy Now Price" onChange={onChange} />
							<h3>Auction End Date</h3>
							<Input
								type="datetime-local"
								id="endDate"
								value={endDate}
								placeholder="Auction Run Time"
								onChange={onChange}
							/>
							<ButtonContainer>
								<Button disabled={isLoading ? true : false} variant="primary">
									Create Auction
								</Button>
							</ButtonContainer>
						</FormGroup>
					</Form>
				</AuctionCreateChildren>
				<AuctionCreateChildren>
					<h3>Preview</h3>
					<Card
						albumCover={albumCoverQuery === '' ? unknownAlbumCover : albumCoverQuery}
						albumName={albumName}
						artistName={artistName}
						endDate={endDate.toString()}
					/>
				</AuctionCreateChildren>
			</AuctionCreateContainer>
		</>
	);
};

export default CreateAuctionForm;

function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
