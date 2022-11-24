import styled from 'styled-components';
import { theme } from 'common/styles/theme';
import Card from 'common/components/Card';

import { useGetAllAuctionsQuery } from 'features/Dashboard/api/apiSlice';
import { IAuction } from './models/api.models';

const AllAuctions = () => {
	const { data: allAuctions } = useGetAllAuctionsQuery([]);
	console.log('allAuctions :', allAuctions);

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

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 32px;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	justify-items: center;

	@media ${theme.device.default} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${theme.device.tabletMax} {
		grid-template-columns: repeat(1, 1fr);
	}
`;
