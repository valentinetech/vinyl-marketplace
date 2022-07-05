//Components
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import Register from 'pages/Register/Register';
//Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Theme styled-components
import { GlobalStyles } from 'common/styles/global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/styles/theme';
//Redux Toolkit
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
