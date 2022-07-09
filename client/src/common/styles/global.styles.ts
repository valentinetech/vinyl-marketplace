import { createGlobalStyle } from 'styled-components';
import { theme, ThemeProps } from './theme';

export const GlobalStyles = createGlobalStyle<ThemeProps>`

//Global
body{
	background: ${theme.colors.body};
  font-family: 'Poppins', sans-serif;
  font-size: ${theme.fontSize.pSize};
  font-weight: ${theme.fontWeight.regular};
  color: ${theme.colors.textPrimary};
  letter-spacing: 0;
}
//Default Fonts
html {
  scroll-behavior: smooth;
}
link,
li,
ul
{
  font-family: inherit;
  font-size: ${theme.fontSize.linkSize};
  font-weight: ${theme.fontWeight.regular};
}
button
{
  font-family: inherit;
  font-size: ${theme.fontSize.buttonSize};
  font-weight: ${theme.fontWeight.regular};
}

h1{
  font-family: inherit;
  font-size: ${theme.fontSize.h1Size};
  font-weight: ${theme.fontWeight.bold};
}
h2{
  font-family: inherit;
  font-size: ${theme.fontSize.h2Size};
  font-weight: ${theme.fontWeight.bold};
}
h3{
  font-family: inherit;
  font-size: ${theme.fontSize.h3Size};
  font-weight: ${theme.fontWeight.semiBold};
}
h4{
  font-family: inherit;
  font-size: ${theme.fontSize.h4Size};
  font-weight: ${theme.fontWeight.semiBold};
}
h5{
  font-family: inherit;
  font-size: ${theme.fontSize.h5Size};
  font-weight: ${theme.fontWeight.semiBold};
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
