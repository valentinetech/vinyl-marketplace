import Button from 'common/components/Button';
import Input from 'common/components/Input';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { IAuction } from './models/api.models';
import { useCreateAuctionMutation } from './api/apiSlice';
import useLocalStorageGet from 'common/hooks/useLocalStorageGet';
import styled from 'styled-components';
import Card from 'common/components/Card';
import { theme } from 'common/styles/theme';
import unknownAlbumCover from 'assets/album-cover-unknown.png';
import useSpotifySearch from 'common/hooks/useSpotifySearch';

const ButtonContainer = styled.div`
	position: absolute;
	bottom: 24px;
`;

const Form = styled.form`
	width: 100%;
	max-width: 1120px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const FormGroup = styled.div`
	position: relative;
	font-family: inherit;
	display: flex;
	width: auto;
	flex-direction: column;
	align-items: center;
	border: 1px solid #e6e6e6;
	border-radius: 5px;
	padding: 30px 20px;
	min-height: 640px;
	width: 350px;
	padding-top: 50px;

	label {
		padding-bottom: 20px;
	}
`;

const AuctionCreateContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const AuctionCreateChildren = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	align-items: center;
	justify-content: flex-end;

	h3:first-child {
		margin-bottom: 10px;
		color: ${theme.colors.brand};
	}

	h5:first-child {
		margin-bottom: 20px;
	}
`;

const CreateAuctionForm = () => {
	const [formData, setFormData] = useState<IAuction>({
		userId: '',
		albumCover: '',
		albumName: '',
		artistName: '',
		buyNowPrice: '',
		minBid: '',
		endDate: '',
	});
	const { albumName, artistName, buyNowPrice, endDate, minBid } = formData;

	//Queries
	const [createAuction, { isLoading, isError, error, isSuccess }] = useCreateAuctionMutation();

	//Custom Hooks
	const [userId] = useLocalStorageGet();
	const [, , albumCoverQuery] = useSpotifySearch(albumName || artistName);
	useEffect(() => {
		if (isSuccess) {
			toast.success('Auction created successfully');
		}

		if (isError) {
			if (Array.isArray((error as any).data.error)) {
				(error as any).data.error.forEach((el: any) =>
					toast.error('There is no such album...', { toastId: 'toastidError' })
				);
			} else {
				toast.error('There is no such album...', { toastId: 'toastidError' });
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newAuction = {
			userId: userId,
			albumCover: albumCoverQuery,
			albumName: albumName,
			artistName: artistName,
			buyNowPrice: buyNowPrice ?? 0,
			minBid: minBid ?? 0,
			endDate: endDate ?? 0,
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
							<Input type='text' id='albumName' value={albumName} placeholder='Album Name' onChange={onChange} />
							<Input type='text' id='artistName' value={artistName} placeholder='Artist Name' onChange={onChange} />
							<Input type='text' id='minBid' value={minBid} placeholder='Starting Bid' onChange={onChange} />
							<Input type='text' id='buyNowPrice' value={buyNowPrice} placeholder='Buy Now Price' onChange={onChange} />
							<label>Auction End Date</label>
							<Input
								type='datetime-local'
								id='endDate'
								value={endDate}
								placeholder='Auction Run Time'
								onChange={onChange}
							/>
							<ButtonContainer>
								<Button disabled={isLoading ? true : false} variant='primary'>
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
