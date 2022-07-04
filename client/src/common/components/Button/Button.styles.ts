import styled from 'styled-components';
import { theme } from 'common/styles/theme';

export const ButtonPrimary = styled.button`
  cursor: pointer;
  width: 175px;
  height: 50px;
  background-color: ${theme.colors.brand};
  border-radius: 15px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${theme.colors.brandSecondary};
    color: ${theme.colors.blue};
  }
`;

export const ButtonSecondary = styled.button`
  cursor: pointer;
  width: 175px;
  height: 50px;
  background-color: ${theme.colors.brandSecondary};
  border-radius: 15px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${theme.colors.brand};
    color: ${theme.colors.blue};
  }
`;
