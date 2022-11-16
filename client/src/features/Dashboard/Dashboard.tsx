import Header from 'common/layouts/Header';
import { useEffect, useState } from 'react';
import {
	useCreateAuctionMutation,
	// useCreateAuctionMutation,
	// useGetAllAuctionsByUserQuery,
	useGetAllAuctionsQuery,
	// useGetAuctionQuery,
} from 'features/Dashboard/api/apiSlice';
import useLocalStorageGet from 'common/hooks/useLocalStorageGet';
import AuctionForm from './AuctionForm';
import styled from 'styled-components';
import useSpotifyToken from 'common/hooks/useSpotifyToken';
import useSpotifySearch from 'common/hooks/useSpotifySearch';

export const DashboardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	margin-bottom: 50px;
`;

const Dashboard = () => {
	const [createAuction] = useCreateAuctionMutation();
	const addAuction = () => {
		const auction = {
			userId: '62dd9bf29ddde089792724be',
			albumCover: 'albumCover',
			album: 'album',
			artist: 'artist',
			buyNowPrice: 50,
			minBid: 50,
			isBought: false,
			lastBid: 50,
			timeLeft: 50,
		};

		createAuction(auction);
	};
	const [userId] = useLocalStorageGet();
	const { data: allAuctionsSelect } = useGetAllAuctionsQuery([]);

	const { albumQuery } = useSpotifySearch('damn');

	const [spotifyToken, spotifyTokenLoaded] = useSpotifyToken();
	return (
		<DashboardContainer>
			<Header />
			<button onClick={addAuction}> Add Dummy </button>
			<div>Add auction form</div>
			<AuctionForm></AuctionForm>
			<div>My Listed Auctions list // edit button // delete</div>
			<div>My Bid Auctions list // delete</div>
			<div>All Auctions list</div>
			<p>{userId}</p>
			<div>Dashboard</div>;
			{allAuctionsSelect &&
				allAuctionsSelect.map((el) => {
					return (
						<div>
							<p key={el.album}>{el.album}</p>
						</div>
					);
				})}
		</DashboardContainer>
	);
};
export default Dashboard;
