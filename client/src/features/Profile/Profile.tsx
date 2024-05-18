import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import { H2Header, Section } from './Profile.styles';

const Profile = () => {
	const userId: string = localStorage.getItem('userId') ?? '';
	const userName: string = localStorage.getItem('username') ?? '';

	return (
		<>
			<Header />
			<Section>
				<H2Header>Welcome back {userId}!</H2Header>
				<h4>Your user ID is: {userName}</h4>
			</Section>
			<Footer />
		</>
	);
};

export default Profile;
