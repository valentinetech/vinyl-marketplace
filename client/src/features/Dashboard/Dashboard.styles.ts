import styled from 'styled-components';
import { theme } from 'common/styles/theme';

export const DashboardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	margin-bottom: 50px;
`;

export const Section = styled.section`
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
