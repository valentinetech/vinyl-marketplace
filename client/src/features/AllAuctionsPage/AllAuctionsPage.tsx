import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import AllAuctions from 'features/Dashboard/AllAuctions';
import { Section } from './AllAuctionsPage.styles';

const AllAuctionsPage = () => {
	return (
		<>
			<Header />
			<Section>
				<AllAuctions />
			</Section>
			<Footer />
		</>
	);
};

export default AllAuctionsPage;
