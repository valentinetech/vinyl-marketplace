import { theme } from 'common/styles/theme';
import styled from 'styled-components';

const InputStyles = styled.input`
	border: 1px solid white;
	border-radius: 10px;
	padding: 10px;
	background-color: ${theme.colors.body};
	color: ${theme.colors.white};
	margin-bottom: 15px;
`;

export default InputStyles;
