import styled from 'styled-components';
import { theme } from 'common/styles/theme';

export { ButtonContainer, Form, FormGroup, AuctionCreateContainer, AuctionCreateChildren };

const ButtonContainer = styled.div`
	position: absolute;
	bottom: 24px;
`;

const Form = styled.form`
	width: 100%;
	max-width: 1120px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const FormGroup = styled.div`
	position: relative;
	font-family: inherit;
	display: flex;
	width: auto;
	flex-direction: column;
	align-items: center;
	border: 1px solid #e6e6e6;
	border-radius: 5px;
	padding: 30px 20px;
	min-height: 640px;
	width: 350px;
	padding-top: 50px;

	label {
		padding-bottom: 20px;
	}
`;

const AuctionCreateContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const AuctionCreateChildren = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	align-items: center;
	justify-content: flex-end;

	h3:first-child {
		margin-bottom: 10px;
		color: ${theme.colors.brand};
	}

	h5:first-child {
		margin-bottom: 20px;
	}
`;
