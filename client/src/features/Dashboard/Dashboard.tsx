import Header from 'common/layouts/Header';
import CreateAuctionForm from './CreateAuctionForm';
import AllAuctions from './AllAuctions';
import UserAuctions from './UserAuctions';
import { Section, DashboardContainer } from './Dashboard.styles';

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
				<h2>All Auctions</h2>
				<AllAuctions></AllAuctions>
			</Section>
		</DashboardContainer>
	);
};
export default Dashboard;
