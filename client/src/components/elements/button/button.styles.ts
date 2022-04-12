import styled from 'styled-components';
import { theme, ThemeProps } from '@/styles/global.styles';

export const StyledButton = styled.button`
  cursor: pointer;
  width: 170px;
  height: 50px;
  border: 2px solid ${({ theme }: ThemeProps) => theme.colors.brand};
  box-sizing: border-box;
  border-radius: 30px;
  box-shadow: 0px 2px 15px 0px #8ec0fcb2;
  background: linear-gradient(
    269.59deg,
    #3f85f6 -12.09%,
    #468af7 5.6%,
    #5898f9 16.65%,
    #6fa9fa 28.83%,
    #82b7fb 40.81%,
    #99c8fe 52.8%,
    #a6cffd 63.25%,
    #b6d8fe 74.69%,
    #c4dffd 83.98%,
    #d0e5fd 91.6%,
    #d8e9fe 97.7%,
    #d9e9fe 110.64%
  );

  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;

  &:hover,
  &focus {
    border: 2px solid;
    background: ${({ theme }: ThemeProps) => theme.colors.body};
    color: ${({ theme }: ThemeProps) => theme.colors.textPrimary};
    box-shadow: inset 0 0 0 50px ${({ theme }: ThemeProps) => theme.colors.body};
  }
`;
