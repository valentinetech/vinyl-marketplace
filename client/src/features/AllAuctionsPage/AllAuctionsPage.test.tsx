import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from 'store/store';
import AllAuctionsPage from './AllAuctionsPage';

vi.mock('common/layouts/Header', () => ({
	__esModule: true,
	default: () => <div data-testid="Header" />,
}));

vi.mock('common/layouts/Footer', () => ({
	__esModule: true,
	default: () => <div data-testid="Footer" />,
}));

vi.mock('features/Dashboard/AllAuctions', () => ({
	__esModule: true,
	default: () => <div data-testid="AllAuctions" />,
}));
describe('AllAuctionsPage', () => {
	it('renders the AllAuctionsPage', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<AllAuctionsPage />
				</MemoryRouter>
			</Provider>,
		);
		const userAuctions = screen.getByTestId('AllAuctions');
		expect(userAuctions).toBeInTheDocument();
	});
});
