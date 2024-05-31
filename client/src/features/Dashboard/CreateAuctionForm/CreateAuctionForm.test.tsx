import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { store } from 'store/store';
import { vi } from 'vitest';
import CreateAuctionForm from './CreateAuctionForm';

const createAuctionMock = vi.fn();
let queryStateMock = {
	isLoading: false,
	isError: false,
	isSuccess: false,
};
vi.mock('store/queries/auctionQuery', async (importOriginal) => {
	const actual: [] = await importOriginal();

	return {
		...actual,
		useCreateAuctionMutation: () => [createAuctionMock, queryStateMock],
	};
});

vi.mock('common/hooks/useSpotifySearch', () => ({
	default: () => ({
		albumCoverQuery: 'mockCoverUrl',
	}),
}));

vi.mock('react-toastify', () => ({
	__esModule: true,
	toast: {
		success: vi.fn(),
		error: vi.fn(),
		loading: vi.fn(),
		dismiss: vi.fn(),
	},
}));

describe('CreateAuctionForm', () => {
	beforeEach(() => {
		userEvent.setup();
		vi.clearAllMocks();
	});

	it('should create a new auction with success', async () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('id');
		queryStateMock = {
			isLoading: false,
			isError: false,
			isSuccess: true,
		};
		render(
			<Provider store={store}>
				<MemoryRouter>
					<CreateAuctionForm />
				</MemoryRouter>
			</Provider>,
		);
		await userEvent.type(screen.getByPlaceholderText(/album name/i), 'album');
		await userEvent.type(screen.getByPlaceholderText(/artist name/i), 'artist');
		await userEvent.type(screen.getByPlaceholderText(/starting bid/i), '5');
		await userEvent.type(screen.getByPlaceholderText(/buy now price/i), '100');

		await userEvent.click(screen.getByRole('button', { name: 'Create Auction' }));
		expect(createAuctionMock).toHaveBeenCalled();
		expect(toast.success).toHaveBeenCalled();
	});

	it('should run loading state', async () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('id');
		queryStateMock = {
			isLoading: true,
			isError: false,
			isSuccess: false,
		};
		render(
			<Provider store={store}>
				<MemoryRouter>
					<CreateAuctionForm />
				</MemoryRouter>
			</Provider>,
		);
		await userEvent.type(screen.getByPlaceholderText(/album name/i), 'album');
		await userEvent.type(screen.getByPlaceholderText(/artist name/i), 'artist');
		await userEvent.type(screen.getByPlaceholderText(/starting bid/i), '5');
		await userEvent.type(screen.getByPlaceholderText(/buy now price/i), '100');

		await userEvent.click(screen.getByRole('button', { name: 'Create Auction' }));
		expect(createAuctionMock).not.toHaveBeenCalled();
		expect(toast.loading).toHaveBeenCalled();
	});

	it('should handle error state', async () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('id');
		queryStateMock = {
			isLoading: false,
			isError: true,
			isSuccess: false,
		};
		render(
			<Provider store={store}>
				<MemoryRouter>
					<CreateAuctionForm />
				</MemoryRouter>
			</Provider>,
		);
		await userEvent.type(screen.getByPlaceholderText(/album name/i), 'album');
		await userEvent.type(screen.getByPlaceholderText(/artist name/i), 'artist');
		await userEvent.type(screen.getByPlaceholderText(/starting bid/i), '5');
		await userEvent.type(screen.getByPlaceholderText(/buy now price/i), '100');

		await userEvent.click(screen.getByRole('button', { name: 'Create Auction' }));
		expect(createAuctionMock).toHaveBeenCalled();
		expect(toast.error).toHaveBeenCalled();
	});
});
