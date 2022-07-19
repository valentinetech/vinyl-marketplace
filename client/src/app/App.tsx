//Components
import Home from 'features/Home/Home';
import Login from 'features/Auth/Login/Login';
import Profile from 'features/Profile/Profile';
import Register from 'features/Auth/Register/Register';
//Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Theme styled-components
import { GlobalStyles } from 'common/styles/global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/styles/theme';
//Redux Toolkit
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path=':userId' element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
// Wrapp redux store
const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
