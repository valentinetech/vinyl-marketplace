import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import { H2Header, Section } from './Profile.styles';

const Profile = () => {
	const userId: string = sessionStorage.getItem('userId') ?? '';
	const username: string = sessionStorage.getItem('username') ?? '';

	return (
		<>
			<Header />
			<Section>
				<H2Header>Welcome back {username}!</H2Header>
				<h4>Your user ID is: {userId}</h4>
			</Section>
			<Footer />
		</>
	);
};

export default Profile;
