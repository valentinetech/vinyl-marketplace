import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import styled from 'styled-components';
import { Section, H2Header } from './Profile.styles';

const Profile = () => {
	const username = localStorage.getItem('username');
	const email = localStorage.getItem('email');
	const _id = localStorage.getItem('_id');

	return (
		<>
			<Header />
			<Section>
				<H2Header>Welcome back {username}!</H2Header>
				<h4>Your user ID is: {_id}</h4>
				<h4>Your email is: {email}</h4>
			</Section>
			<Footer />
		</>
	);
};

export default Profile;
