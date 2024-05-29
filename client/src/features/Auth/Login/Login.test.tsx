import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { store } from 'store/store';
import { vi } from 'vitest';
import * as Yup from 'yup';
import Login from './Login';

vi.mock('react-toastify', () => ({
	__esModule: true,
	toast: {
		success: vi.fn(),
		error: vi.fn(),
		loading: vi.fn(),
		dismiss: vi.fn(),
	},
}));

describe('Login', () => {
	vi.mock('../schema/authSchema', () => ({
		loginSchema: Yup.object().shape({
			username: Yup.string().min(5),
			password: Yup.string(),
		}),
	}));
	beforeEach(() => {
		userEvent.setup();
		vi.clearAllMocks();
	});

	it('renders without crashing with userToken', () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('token');
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			</Provider>,
		);
		expect(toast.success).toHaveBeenCalled();
	});

	it('handles form submission', async () => {
		const dispatchSpy = vi.spyOn(store, 'dispatch');
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			</Provider>,
		);
		await userEvent.type(screen.getByPlaceholderText('Enter Your Username'), 'username');
		await userEvent.type(screen.getByPlaceholderText('Enter Your Password'), 'Password7$');
		await userEvent.click(screen.getByTestId('login-button'));
		expect(dispatchSpy).toHaveBeenCalled();
		expect(toast.loading).toHaveBeenCalled();
	});
});
