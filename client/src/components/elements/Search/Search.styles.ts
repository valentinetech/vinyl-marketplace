import styled from 'styled-components';
import { theme } from 'styles/theme';

export { Container, Input };

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  width: auto;
  margin: 10px;
`;

const Input = styled.input`
  background-color: transparent;

  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.brand};
  padding: 5px;
  border-radius: 12px;

  &:focus {
    border: 1px solid ${theme.colors.brandSecondary};
  }

  &::placeholder {
    position: absolute;
    color: white;
    font-size: ${theme.fontSize.buttonSize};
    opacity: 70%;
    font-style: italic;
  }
`;
