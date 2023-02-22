import { GlobalStyles } from 'common/styles/global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/styles/theme';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from 'routes';

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<AppRoutes />
				<ToastContainer newestOnTop position='bottom-right' autoClose={3000} closeOnClick toastClassName='toast' />
			</ThemeProvider>
		</Provider>
	);
};

export default App;
