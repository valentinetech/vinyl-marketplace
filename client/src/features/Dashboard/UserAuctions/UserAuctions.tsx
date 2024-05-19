import Card from 'common/components/Card';
import useLocalStorageGetUserId from 'common/hooks/useLocalStorageGetUserId';
import { useGetAllAuctionsByUserQuery } from 'store/queries/auctionQuery';
import { IAuction } from '../../../store/queries/auctionQuery.models';
import { Container } from './UserAuctions.styles';

const UserAuctions = () => {
	const userId = useLocalStorageGetUserId();
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
