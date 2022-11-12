import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'app/store';
import { API_URL } from 'config/config';
import { AuctionModel } from '../models/api.models';

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
		getAllAuctions: builder.query<AuctionModel[], unknown[]>({
			query: () => '/read_all',
			providesTags: ['Auctions'],
			transformResponse: (response: { auction: AuctionModel[] }) => response.auction,
		}),
		getAllAuctionsByUser: builder.query<AuctionModel[], string>({
			query: (userId) => `/read_all/${userId}`,
			providesTags: ['Auctions'],
			transformResponse: (response: { auction: AuctionModel[] }) => response.auction,
		}),
		getAuction: builder.query<AuctionModel, string>({
			query: (auctionId) => `/read/${auctionId}`,
			providesTags: ['Auctions'],
			transformResponse: (response: { auction: AuctionModel }) => response.auction,
		}),
		createAuction: builder.mutation<AuctionModel, AuctionModel>({
			query: (auction) => ({
				url: `/create`,
				method: 'POST',
				body: { auction },
			}),
			invalidatesTags: ['Auctions'],
		}),
		updateAuction: builder.mutation<AuctionModel, AuctionModel>({
			query: (auction) => ({
				url: `/update/${auction._id}`,
				method: 'PATCH',
				body: auction,
			}),
			invalidatesTags: ['Auctions'],
		}),
		deleteAuction: builder.mutation<null, string>({
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
