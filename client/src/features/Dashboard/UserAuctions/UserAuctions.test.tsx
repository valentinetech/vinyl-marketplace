import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { IAuction } from 'store/queries/auctionQuery.models';
import { store } from 'store/store';
import UserAuctions from './UserAuctions';

let dataMock: IAuction[];
vi.mock('store/queries/auctionQuery', async (importOriginal) => {
	const actual: [] = await importOriginal();
	return {
		...actual,
		useGetAllAuctionsByUserQuery: () => ({ data: dataMock }),
	};
});
describe('UserAuctions', () => {
	it('should render UserAuctions component', () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('id');
		dataMock = [
			{
				userId: '1',
				_id: '1',
				lastBid: 10,
				albumCover: 'cover1',
				albumName: 'name1',
				artistName: 'artist1',
				buyNowPrice: '100',
				minBid: 10,
				endDate: '2029-10-10',
				createdAt: '2023-01-01',
			},
			{
				userId: '2',
				_id: '2',
				lastBid: 10,
				albumCover: 'cover2',
				albumName: 'name2',
				artistName: 'artist2',
				buyNowPrice: '200',
				minBid: 20,
				endDate: '2029-10-10',
				createdAt: '2023-01-01',
			},
		];
		render(
			<Provider store={store}>
				<MemoryRouter>
					<UserAuctions />
				</MemoryRouter>
			</Provider>,
		);
		const title = screen.getByRole('heading', { level: 2 });
		expect(title).toBeInTheDocument();
	});
});
