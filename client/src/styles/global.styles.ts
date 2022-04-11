import { createGlobalStyle } from 'styled-components';

interface ThemeProps {
  theme: typeof theme;
}

export const theme = {
  colors: {
    body: '#3e3e8e',
    brand: '#3e3e8e',
  },
  breakpoints: {
    mobile: '786px',
    tablet: '689px',
  },
};

export const GlobalStyles = createGlobalStyle<ThemeProps>`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

//Global
body{
	background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
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
