import Header from 'common/layouts/Header';
import { useEffect, useState } from 'react';
import {
	// useCreateAuctionMutation,
	// useGetAllAuctionsByUserQuery,
	useGetAllAuctionsQuery,
	// useGetAuctionQuery,
} from 'features/Dashboard/api/apiSlice';
import useLocalStorageUserId from 'common/hooks/useLocalStorageUserId';

const Dashboard = () => {
	const [userId] = useLocalStorageUserId('');
	console.log('userId :', userId);
	const { data: allAuctionsSelect } = useGetAllAuctionsQuery([]);
	console.log(allAuctionsSelect);
	return (
		<>
			<Header />
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
		</>
	);
};
export default Dashboard;
