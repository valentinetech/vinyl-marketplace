import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';
import { sessionStorageMock } from 'vitest.setup';
import Menu from './Menu';

describe('Menu Component', () => {
	it('should render desktop menu protected routes', () => {
		sessionStorageMock.getItem.mockReturnValue('token');
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Menu variant="desktop" />
				</BrowserRouter>
				,
			</Provider>,
		);
		expect(screen.getByRole('menu')).toBeInTheDocument();
		expect(screen.getByTestId('desktop')).toBeInTheDocument();
		expect(screen.getByText('Dashboard')).toBeInTheDocument();
	});

	it('should render mobile menu protected routes', () => {
		sessionStorageMock.getItem.mockReturnValue('token');
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Menu variant="mobile" />
				</BrowserRouter>
				,
			</Provider>,
		);
		expect(screen.getByRole('menu')).toBeInTheDocument();
		expect(screen.getByTestId('mobile')).toBeInTheDocument();
		expect(screen.getByText('Dashboard')).toBeInTheDocument();
	});

	it('should render desktop menu public routes', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Menu variant="desktop" />
				</BrowserRouter>
				,
			</Provider>,
		);
		expect(screen.getByRole('menu')).toBeInTheDocument();
		expect(screen.getByTestId('desktop')).toBeInTheDocument();
		expect(screen.queryByText('Dashboard')).toBeNull();
	});

	it('should render mobile menu public routes', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Menu variant="mobile" />
				</BrowserRouter>
				,
			</Provider>,
		);
		expect(screen.getByRole('menu')).toBeInTheDocument();
		expect(screen.getByTestId('mobile')).toBeInTheDocument();
		expect(screen.queryByText('Dashboard')).toBeNull();
	});
});
