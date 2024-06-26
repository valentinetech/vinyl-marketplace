import Button from 'common/components/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 100px;
	margin: 50px;
	height: 400px;
`;

const NotFound = () => {
	const navigate = useNavigate();
	const navigateToHomePage = () => navigate('/');
	return (
		<>
			<Header />
			<Section>
				<h2 data-testid="not-found-h2">404: This page does&apost exit.</h2>
				<Button data-testid="not-found-button" variant="primary" onClick={navigateToHomePage}>
					Go to HomePage...
				</Button>
			</Section>
		</>
	);
};
export default NotFound;
