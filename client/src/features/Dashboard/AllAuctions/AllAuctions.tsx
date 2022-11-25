import Card from 'common/components/Card';
import { useGetAllAuctionsQuery } from 'features/Dashboard/api/apiSlice';
import { IAuction } from '../api/api.models';
import { Container } from './AllAuctions.styles';

const AllAuctions = () => {
	const { data: allAuctions } = useGetAllAuctionsQuery([]);

	return (
		<>
			<Container>
				{allAuctions?.map((a: IAuction) => {
					return (
						<Card
							key={a._id}
							albumName={a.albumName}
							albumCover={a.albumCover}
							artistName={a.artistName}
							endDate={a.endDate}
							currentBids={a.userBids}
							currentId={a._id}
						/>
					);
				})}
			</Container>
		</>
	);
};

export default AllAuctions;
