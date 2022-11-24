import Header from 'common/layouts/Header';
import CreateAuctionForm from './CreateAuctionForm';
import styled from 'styled-components';
import { theme } from 'common/styles/theme';
import AllAuctions from './AllAuctions';
import UserAuctions from './UserAuctions';

const Dashboard = () => {
	return (
		<DashboardContainer>
			<Header />
			<Section>
				<h2>Create New Auction</h2>
				<CreateAuctionForm></CreateAuctionForm>
			</Section>
			<Section>
				<h2>My Auctions</h2>
				<UserAuctions></UserAuctions>
			</Section>
			<Section>
				<h2>My Bids</h2>
			</Section>
			<Section>
				<h2>All Auctions</h2>
				<AllAuctions></AllAuctions>
			</Section>
		</DashboardContainer>
	);
};
export default Dashboard;

export const DashboardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	margin-bottom: 50px;
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;

	@media ${theme.device.default} {
		margin: 50px 0px;
		justify-content: center;
	}

	h2:first-child {
		padding: 20px 0;
	}
`;

// TODO: [x] Create Auction Form
// TODO: [x] Create Auction Form Preview on the side
// TODO: [x] Display All User Auctions if he created / Edit & Delete Button
// TODO: [] Display All Auctions User put Bid on
// TODO: [x] Display All Possible Auctions to bid
// TODO: [x] CreatedAt + timeLeftMil store it in database
