import Button from 'common/components/Button';
import Input from 'common/components/Input';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Form, FormGroup, RegisterHeader, ButtonContainer } from 'features/Auth/Register/Register.styles';
// import { IAuction } from './models/api.models';
import { useCreateAuctionMutation } from './api/apiSlice';
import useLocalStorageGet from 'common/hooks/useLocalStorageGet';

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
}

const AuctionForm = () => {
	const createAuctionInitialState = {
		userId: '',
		albumCover: '',
		album: '',
		artist: '',
		buyNowPrice: 0,
		minBid: 5,
		isBought: false,
		lastBid: 0,
		timeLeft: 9000000,
	};
	const [formData, setFormData] = useState<IAuction>(createAuctionInitialState);

	const { albumCover, album, artist, buyNowPrice, timeLeft, minBid } = formData;

	const [createAuction, { isLoading, isError, error, isSuccess }] = useCreateAuctionMutation();
	const [userId] = useLocalStorageGet();

	const userIdCurrent = userId.toString();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));

		// registerSchema.validate({});
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Auction created successfully');
		}

		if (isError) {
			if (Array.isArray((error as any).data.error)) {
				(error as any).data.error.forEach((el: any) =>
					toast.error(el.message, {
						position: 'bottom-right',
					})
				);
			} else {
				toast.error((error as any).data.message, {
					position: 'bottom-right',
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newAuction = {
			userId: userId.toString(),
			albumCover: albumCover,
			album: album,
			artist: artist,
			buyNowPrice: buyNowPrice,
			minBid: minBid,
			isBought: false,
			lastBid: 50,
			timeLeft: timeLeft,
		};
		createAuction(newAuction);
		// const newAuction = {
		// 	userId: '62dd9bf29ddde089792724be',
		// 	albumCover: albumCover,
		// 	album: album,
		// 	artist: artist,
		// 	buyNowPrice: buyNowPrice,
		// 	minBid: minBid,
		// 	isBought: false,
		// 	lastBid: +0,
		// 	timeLeft: +timeLeft,
		// };

		// if (isError) toast.error('User already exists or ' + message, { toastId: 'toastIdRegister' });

		// const isFormValid = await registerSchema.isValid(formData, {
		// 	abortEarly: false,
		// });

		// if (isFormValid) {
		// 	const userData = {
		// 		username,
		// 		email,
		// 		password,
		// 		passwordConfirm,
		// 	};
		// 	dispatch(register(userData));
		// } else {
		// 	registerSchema.validate(formData, { abortEarly: false }).catch((error) => {
		// 		toast.error(error.message, { toastId: 'toastIdRegisterValidation' });
		// 	});
		// }
	};

	return (
		<>
			<Form onSubmit={onSubmit}>
				<FormGroup>
					<Input type='text' id='album' value={album} placeholder='Album Name' onChange={onChange} />
					<Input type='text' id='artist' value={artist} placeholder='Artist Name' onChange={onChange} />
					<Input type='text' id='albumCover' value={albumCover} placeholder='Album Art Link' onChange={onChange} />
					<Input type='text' id='minBid' value={minBid} placeholder='Minimum Bid' onChange={onChange} />
					<Input type='text' id='buyNowPrice' value={buyNowPrice} placeholder='Buy Now Price' onChange={onChange} />
					<Input type='text' id='timeLeft' value={timeLeft} placeholder='Auction Run Time' onChange={onChange} />

					<ButtonContainer>
						<Button variant='primary'>Create Auction</Button>
					</ButtonContainer>
				</FormGroup>
			</Form>
		</>
	);
};

export default AuctionForm;
