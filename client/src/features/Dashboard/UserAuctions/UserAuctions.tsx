import Card from 'common/components/Card';
import { useGetAllAuctionsByUserQuery } from 'store/queries/auctionQuery';
import { IAuction } from '../../../store/queries/auctionQuery.models';
import { Container } from './UserAuctions.styles';

const UserAuctions = () => {
	const userId = sessionStorage.getItem('userId') ?? '';
	const { data: userAuctions } = useGetAllAuctionsByUserQuery(userId);
	return (
		<>
			{userAuctions ? <h2>My Auctions</h2> : <></>}
			<Container>
				{userAuctions &&
					userAuctions
						.map((a: IAuction) => {
							return (
								<>
									<Card
										key={a._id + a.userId + a.createdAt}
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
