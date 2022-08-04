import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import styled from 'styled-components';

const Section = styled.section`
	display: flex;
	flex-direction: column;
	margin: 50px;
`;

const Profile = () => {
	const username = localStorage.getItem('username');
	const email = localStorage.getItem('email');
	const _id = localStorage.getItem('_id');

	return (
		<>
			<Header />
			<Section>
				<h3>Your user ID is: {_id}</h3>
				<h3>Your username is: {username}</h3>
				<h3>Your email is: {email}</h3>
			</Section>
			<Footer />
		</>
	);
};

export default Profile;
