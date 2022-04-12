import { createGlobalStyle } from 'styled-components';

export interface ThemeProps {
  theme: typeof theme;
}

export const theme = {
  colors: {
    body: '#05121B',
    brand: '#3F85F6',
    textPrimary: '#FDFDFD',
    textSecondary: '#3B393C',
    stroke: '3E3E3E',
  },
  breakpoints: {
    mobile: '786px',
    tablet: '689px',
  },
  fontSize: {
    h1Size: '90px',
    h2Size: '64px',
    h3Size: '45px',
    h4Size: '32px',
    h5Size: '23px',
    buttonSize: '18px',
    pSize: '16px',
  },
  fontWeight: {
    regular: '400',
    semiBold: '600',
    bold: '700',
  },
};

export const GlobalStyles = createGlobalStyle<ThemeProps>`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

//Global
body{
	background: ${({ theme }) => theme.colors.body};
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.pSize};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 0;
}
//Default Fonts

button
{
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.buttonSize};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
}

h1{
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.h1Size};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
}
h2{
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.h2Size};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
}
h3{
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.h3Size};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
}
h4{
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.h4Size};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
}
h5{
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.h5Size};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
}

//Reset
*,
*::before,
*::after{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
`;
