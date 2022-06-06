import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global.styles';
import { theme } from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './routes/Home/Home';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
      <Home />
    </Router>
  </ThemeProvider>
);

export default App;
