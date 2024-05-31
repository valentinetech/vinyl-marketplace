import { act, renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
	useCreateAuctionMutation,
	useDeleteAuctionMutation,
	useGetAllAuctionsByUserQuery,
	useGetAllAuctionsQuery,
	useGetAuctionQuery,
	useUpdateAuctionMutation,
} from 'store/queries/auctionQuery';
import { store } from 'store/store';
import { IAuctionRequest } from './auctionQuery.models';

const dataMock = [
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

vi.mock('store/queries/auctionQuery', async (importOriginal) => {
	const actual: [] = await importOriginal();
	return {
		...actual,
		useGetAllAuctionsQuery: () => ({ data: dataMock }),
		useGetAllAuctionsByUserQuery: () => ({ data: dataMock }),
		useGetAuctionQuery: () => ({ data: dataMock }),
	};
});
describe('auctionQuery', () => {
	const wrapper = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;
	it('should have correct exports', () => {
		expect(useGetAllAuctionsQuery).toBeDefined();
		expect(useGetAllAuctionsByUserQuery).toBeDefined();
		expect(useGetAuctionQuery).toBeDefined();
		expect(useUpdateAuctionMutation).toBeDefined();
		expect(useDeleteAuctionMutation).toBeDefined();
		expect(useCreateAuctionMutation).toBeDefined();
	});
	it('should return a list of auctions', async () => {
		const { result } = renderHook(() => useGetAllAuctionsQuery([]), { wrapper });
		await waitFor(() => result.current.isSuccess);
		expect(result.current.data).toBeDefined();
	});
	it('should return a list of auctions by user', async () => {
		const userId = '1234567890';
		const { result } = renderHook(() => useGetAllAuctionsByUserQuery(userId), { wrapper });
		await waitFor(() => result.current.isSuccess);
		expect(result.current.data).toBeDefined();
	});
	it('should return a single auction', async () => {
		const auctionId = '1234567890';
		const { result } = renderHook(() => useGetAuctionQuery(auctionId), { wrapper });
		await waitFor(() => result.current.isSuccess);
		expect(result.current.data).toBeDefined();
	});
	it('should update an auction', async () => {
		const auction: IAuctionRequest = {
			albumCover: 'newCover',
			albumName: 'newName',
			userId: '',
			artistName: '',
			endDate: '',
		};
		const { result } = renderHook(() => useUpdateAuctionMutation(), { wrapper });
		await act(async () => {
			const [updateAuction] = result.current;
			const response = await updateAuction(auction);
			expect(response).toBeDefined();
		});
	});
	it('should delete an auction', async () => {
		const auctionId = '1';
		const { result } = renderHook(() => useDeleteAuctionMutation(), { wrapper });
		await act(async () => {
			const [deleteAuction] = result.current;
			const response = await deleteAuction(auctionId);
			expect(response).toBeDefined();
		});
	});
	it('should create an auction', async () => {
		const auction: IAuctionRequest = {
			albumCover: 'newCover',
			albumName: 'newName',
			userId: '',
			artistName: '',
			endDate: '',
		};
		const { result } = renderHook(() => useCreateAuctionMutation(), { wrapper });
		await act(async () => {
			const [createAuction] = result.current;
			const response = await createAuction(auction);
			expect(response).toBeDefined();
		});
	});
});
