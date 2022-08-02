//Theme styled-components
import { GlobalStyles } from 'common/styles/global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/styles/theme';
//Redux Toolkit
import { Provider } from 'react-redux';
import { store } from './store';
//Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Routing
import AppRoutes from 'routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer newestOnTop position='bottom-right' autoClose={3000} closeOnClick toastClassName='toast' />
    </ThemeProvider>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
