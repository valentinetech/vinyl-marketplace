import { render, screen, waitFor } from '@testing-library/react';
import { ICard } from 'common/components/Card/Card.models';
import { describe, it, vi } from 'vitest';
import AllAuctions from './AllAuctions';

vi.mock('common/components/Card', () => ({
	__esModule: true,
	default: ({ albumName, artistName }: ICard) => (
		<div data-testid="card">
			<div>{albumName}</div>
			<div>{artistName}</div>
		</div>
	),
}));
let mockReturnValue: unknown;

vi.mock('store/queries/auctionQuery', () => ({
	useGetAllAuctionsQuery: () => mockReturnValue,
}));

describe('AllAuctions component', () => {
	it('renders auctions when data is available', () => {
		mockReturnValue = [
			{
				_id: '1',
				albumName: 'Album 1',
				albumCover: 'cover1.jpg',
				artistName: 'Artist 1',
				endDate: '2024-01-01',
				userBids: 10,
			},
			{
				_id: '2',
				albumName: 'Album 2',
				albumCover: 'cover2.jpg',
				artistName: 'Artist 2',
				endDate: '2024-02-01',
				userBids: 20,
			},
		];
		render(<AllAuctions />);
		waitFor(() => {
			const cards = screen.getAllByTestId('card-test');
			expect(cards[0]).toHaveTextContent('Album 1');
			expect(cards[0]).toHaveTextContent('Artist 1');
			expect(cards[1]).toHaveTextContent('Album 2');
			expect(cards[1]).toHaveTextContent('Artist 2');
		});
	});
	it('renders auctions when data is not available', () => {
		mockReturnValue = [];
		render(<AllAuctions />);
		waitFor(() => {
			expect(screen.getByTestId('card-test')).toBeNull();
		});
	});
});
