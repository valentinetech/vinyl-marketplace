import Card from 'common/components/Card';
import { useGetAllAuctionsByUserQuery } from 'features/Dashboard/api/apiSlice';
import { IAuction } from '../api/api.models';
import { Container } from './UserAuctions.styles';
import useLocalStorageGetUserInfo from 'common/hooks/useLocalStorageGetUserInfo';

const UserAuctions = () => {
	const userId = useLocalStorageGetUserInfo();
	const { data: userAuctions } = useGetAllAuctionsByUserQuery(userId);
	return (
		<>
			<Container>
				{userAuctions
					?.map((a: IAuction) => {
						return (
							<>
								<Card
									key={a._id}
									albumName={a.albumName}
									albumCover={a.albumCover}
									artistName={a.artistName}
									canDelete={true}
									currentId={a._id}
									endDate={a.endDate}
									canEdit={true}
									bidLast={a.lastBid}
								/>
							</>
						);
					})
					.reverse()}
			</Container>
		</>
	);
};

export default UserAuctions;
