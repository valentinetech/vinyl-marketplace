import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';
import NavMobile from './NavMobile';

describe('NavMobile', () => {
	it('should render mobile menu', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<NavMobile isOpen={true} toggleMenu={() => void 0} />
				</BrowserRouter>
			</Provider>,
		);
		expect(screen.getByRole('navigation')).toBeInTheDocument();
		expect(screen.getByTestId('toggle-button-on')).toBeInTheDocument();
		expect(screen.getByTestId('toggle-button-off')).toBeInTheDocument();
	});
});
