import { theme } from 'common/styles/theme';
import styled from 'styled-components';

export { Section, Form, FormGroup, LoginHeader, ButtonContainer };

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	width: 100%;
	max-width: 1120px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const FormGroup = styled.div`
	font-family: inherit;
	display: flex;
	width: auto;
	flex-direction: column;
	align-items: center;
	border: 1px solid #e6e6e6;
	border-radius: 5px;
	margin: 50px;
	padding: 30px;
`;

const LoginHeader = styled.h2`
	margin-bottom: 20px;
	color: ${theme.colors.brandSecondary};
`;

const ButtonContainer = styled.div`
	margin-top: 20px;
`;
