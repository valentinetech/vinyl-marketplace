import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import { Section, H2Header } from './Profile.styles';

const Profile = () => {
	const userLocal = localStorage.getItem('userInfo');

	const user = userLocal && JSON.parse(userLocal);

	return (
		<>
			<Header />
			<Section>
				<H2Header>Welcome back {user.username}!</H2Header>
				<h4>Your user ID is: {user._id}</h4>
				<h4>Your email is: {user.email}</h4>
			</Section>
			<Footer />
		</>
	);
};

export default Profile;
