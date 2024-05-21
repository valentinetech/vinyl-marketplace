import { theme } from 'common/styles/theme';
import styled from 'styled-components';

export { CopyrightText, SectionContainer };

const SectionContainer = styled.footer`
	width: 100%;
	bottom: 0;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	text-align: center;
	padding-top: 100px;
`;

const CopyrightText = styled.h6`
	margin-top: 50px;
	margin-bottom: 20px;

	@media ${theme.device.default} {
		margin-left: 20px;
		justify-content: center;
	}
`;
