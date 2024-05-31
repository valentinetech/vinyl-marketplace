import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from 'store/store';
import Dashboard from '../Dashboard';

vi.mock('common/layouts/Header', () => ({
	__esModule: true,
	default: () => <div data-testid="Header" />,
}));

vi.mock('common/layouts/Footer', () => ({
	__esModule: true,
	default: () => <div data-testid="Footer" />,
}));

vi.mock('common/components/Card', () => ({
	__esModule: true,
	default: () => <div data-testid="Card" />,
}));
describe('Dashboard', () => {
	it('renders the Dashboard', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Dashboard />
				</MemoryRouter>
			</Provider>,
		);
		const userAuctions = screen.getByRole('heading', { level: 2 });
		expect(userAuctions).toBeInTheDocument();
	});
});
