import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyles from './components/styled/Global';

const theme = {
  colors: {
    header: '#3e3e8e',
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles></GlobalStyles>
    <Header></Header>;
  </ThemeProvider>
);

export default App;
