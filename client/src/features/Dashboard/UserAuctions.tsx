import styled from 'styled-components';
import { theme } from 'common/styles/theme';
import Card from 'common/components/Card';
import { useGetAllAuctionsByUserQuery } from 'features/Dashboard/api/apiSlice';
import { IAuction } from './models/api.models';
import useLocalStorageGet from 'common/hooks/useLocalStorageGet';

const UserAuctions = () => {
	const [userId] = useLocalStorageGet();
	const { data: userAuctions } = useGetAllAuctionsByUserQuery(userId);
	return (
		<>
			<Container>
				{userAuctions?.map((a: IAuction) => {
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
							/>
						</>
					);
				})}
			</Container>
		</>
	);
};

export default UserAuctions;

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
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
