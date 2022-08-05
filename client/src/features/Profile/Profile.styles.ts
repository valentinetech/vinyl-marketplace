import { theme } from 'common/styles/theme';
import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px;
`;

export const H2Header = styled.h2`
	color: ${theme.colors.brand};
`;
