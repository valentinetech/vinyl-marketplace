import { Button } from './components/elements/Button/Button';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/global.styles';
import Header from './components/layouts/Header/Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <>
      <Header />
      <Button variant='primary'>Login</Button>
    </>
  </ThemeProvider>
);

export default App;
