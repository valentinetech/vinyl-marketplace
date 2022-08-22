import styled from 'styled-components';
import { theme } from 'common/styles/theme';

export { SectionContainer, CopyrightText };

const SectionContainer = styled.footer`
	position: absolute;
	width: 100%;
	bottom: 0;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	text-align: center;
`;

const CopyrightText = styled.h6`
	margin-top: 50px;
	margin-bottom: 20px;

	@media ${theme.device.default} {
		margin-left: 20px;
		justify-content: center;
	}
`;
