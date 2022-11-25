import styled from 'styled-components';
import { theme } from 'common/styles/theme';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 32px;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	justify-items: center;

	@media ${theme.device.default} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${theme.device.tabletMax} {
		grid-template-columns: repeat(1, 1fr);
	}
`;
