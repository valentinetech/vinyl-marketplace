import { Button } from '@/components/elements/Button';
import { ThemeProvider } from 'styled-components';
import Header from '@/components/layouts/Header/Header';
import { GlobalStyles, theme } from './styles/global.styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header></Header>
    <>
      <Button variant='primary'>Click me</Button>
    </>
  </ThemeProvider>
);

export default App;
