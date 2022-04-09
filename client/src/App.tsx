import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/layouts/header/Header';

const theme = {
  colors: {
    header: '#3e3e8e',
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Header></Header>;
  </ThemeProvider>
);

export default App;
