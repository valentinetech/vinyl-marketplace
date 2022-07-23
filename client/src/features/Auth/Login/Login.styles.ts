import { theme } from 'common/styles/theme';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: inherit;
`;

export const Input = styled.input`
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px;
  background-color: ${theme.colors.body};
  color: ${theme.colors.white};
  margin-bottom: 10px;
`;
