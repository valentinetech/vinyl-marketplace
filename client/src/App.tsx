import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global.styles';
import { theme } from './styles/theme';
import Header from './components/layouts/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
      <Header />
    </Router>
  </ThemeProvider>
);

export default App;
