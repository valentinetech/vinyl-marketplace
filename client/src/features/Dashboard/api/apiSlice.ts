import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'app/store';
import { API_URL } from 'config/config';
import { IAuction, IAuctionRequest } from './api.models';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL + '/api/auctions',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.userToken;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),

	tagTypes: ['Auctions'],
	endpoints: (builder) => ({
		getAllAuctions: builder.query<IAuction[], void[]>({
			query: () => '/read_all',
			providesTags: (result) =>
				result
					? [...result.map(({ _id }) => ({ type: 'Auctions' as const, _id })), { type: 'Auctions', id: 'LIST' }]
					: [{ type: 'Auctions', id: 'LIST' }],
			transformResponse: (response: { auction: IAuction[] }) => response.auction,
		}),
		getAllAuctionsByUser: builder.query<IAuction[], string>({
			query: (userId) => `/read_all/${userId}`,
			providesTags: ['Auctions'],
			transformResponse: (response: { auction: IAuction[] }) => response.auction,
		}),
		getAuction: builder.query<IAuction, string>({
			query: (auctionId) => `/read/${auctionId}`,
			providesTags: ['Auctions'],
			transformResponse: (response: { auction: IAuction }) => response.auction,
		}),
		createAuction: builder.mutation<void, IAuctionRequest>({
			query: (auction) => ({
				url: `/create`,
				method: 'POST',
				body: auction,
			}),
			invalidatesTags: ['Auctions'],
		}),
		updateAuction: builder.mutation<void, IAuctionRequest>({
			query: (auction) => ({
				url: `/update/${auction._id}`,
				method: 'PATCH',
				body: auction,
			}),
			invalidatesTags: ['Auctions'],
		}),
		deleteAuction: builder.mutation<void, string>({
			query: (auctionId) => ({
				url: `/delete/${auctionId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Auctions'],
		}),
	}),
});

export const {
	useGetAllAuctionsQuery,
	useGetAllAuctionsByUserQuery,
	useGetAuctionQuery,
	useUpdateAuctionMutation,
	useDeleteAuctionMutation,
	useCreateAuctionMutation,
} = apiSlice;
