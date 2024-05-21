import Header from 'common/layouts/Header';
import CreateAuctionForm from './CreateAuctionForm';
import { DashboardContainer, Section } from './Dashboard.styles';
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
				<UserAuctions></UserAuctions>
			</Section>
		</DashboardContainer>
	);
};
export default Dashboard;
