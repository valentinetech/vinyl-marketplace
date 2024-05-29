import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from 'store/store';
import AuthButtons from './AuthButtons';

describe('AuthButtons component', () => {
	userEvent.setup();
	beforeEach(() => {
		sessionStorage.clear();
	});
	it('should render mobile', async () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('token');
		const dispatchSpy = vi.spyOn(store, 'dispatch');
		render(
			<Provider store={store}>
				<MemoryRouter>
					<AuthButtons variant="mobile" />
				</MemoryRouter>
			</Provider>,
		);

		const button = screen.getByRole('button', { name: 'Logout' });
		expect(button).toBeInTheDocument();

		await userEvent.click(button);

		expect(dispatchSpy).toHaveBeenCalled();
	});

	it('should render mobile when user not authenticated', () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce(null);
		render(
			<Provider store={store}>
				<MemoryRouter>
					<AuthButtons variant="mobile" />
				</MemoryRouter>
			</Provider>,
		);

		expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument();
	});
	it('should render desktop', async () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('token');
		const dispatchSpy = vi.spyOn(store, 'dispatch');
		render(
			<Provider store={store}>
				<MemoryRouter>
					<AuthButtons variant="desktop" />
				</MemoryRouter>
			</Provider>,
		);
		const button = screen.getByRole('button', { name: 'Logout' });
		expect(button).toBeInTheDocument();

		await userEvent.click(button);

		expect(dispatchSpy).toHaveBeenCalled();
	});

	it('should render desktop when user not authenticated', () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce(null);
		render(
			<Provider store={store}>
				<MemoryRouter>
					<AuthButtons variant="desktop" />
				</MemoryRouter>
			</Provider>,
		);

		expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument();
	});
});
