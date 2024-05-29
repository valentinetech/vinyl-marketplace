import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { store } from 'store/store';
import { vi } from 'vitest';
import * as Yup from 'yup';
import Register from './Register';

vi.mock('react-toastify', () => ({
	__esModule: true,
	toast: {
		success: vi.fn(),
		error: vi.fn(),
		loading: vi.fn(),
		dismiss: vi.fn(),
	},
}));

describe('Register', () => {
	vi.mock('../schema/authSchema', () => ({
		registerSchema: Yup.object().shape({
			username: Yup.string().min(5),
			email: Yup.string(),
			password: Yup.string(),
			passwordConfirm: Yup.string(),
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
					<Register />
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
					<Register />
				</MemoryRouter>
			</Provider>,
		);
		await userEvent.type(screen.getByPlaceholderText('Enter Your Name'), 'username');
		await userEvent.type(screen.getByPlaceholderText('Enter Your Email'), 'test@example.com');
		await userEvent.type(screen.getByPlaceholderText('Enter Your Password'), 'Password7$');
		await userEvent.type(screen.getByPlaceholderText('Confirm Your Password'), 'Password7$');

		await userEvent.click(screen.getByRole('button', { name: 'Register' }));
		expect(dispatchSpy).toHaveBeenCalled();
		expect(toast.loading).toHaveBeenCalled();
	});

	it('handles form submission error', async () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Register />
				</MemoryRouter>
			</Provider>,
		);
		await userEvent.type(screen.getByPlaceholderText('Enter Your Name'), '1234');
		await userEvent.type(screen.getByPlaceholderText('Enter Your Email'), 'test@example.com');
		await userEvent.type(screen.getByPlaceholderText('Enter Your Password'), 'Password7$');
		await userEvent.type(screen.getByPlaceholderText('Confirm Your Password'), 'Password7$');

		await userEvent.click(screen.getByRole('button', { name: 'Register' }));
		expect(toast.error).toHaveBeenCalled();
	});
});
