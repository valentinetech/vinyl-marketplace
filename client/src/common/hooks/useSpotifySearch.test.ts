import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { IAlbumQuery } from 'common/models/spotify.models';
import { act } from 'react-dom/test-utils';
import useSpotifySearch from './useSpotifySearch';

vi.mock('axios');

const mockData: IAlbumQuery = {
	albums: {
		items: [
			{
				album_type: 'album',
				artists: [],
				images: [{ url: 'https://example.com/album-cover.jpg' }],
			},
		],
	},
};

describe('useSpotifySearch', () => {
	it('fetches album query and cover image URL', async () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('stored_access_token');
		const getSpy = vi.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockData });

		const { result } = renderHook(() => useSpotifySearch('album name'));

		await waitFor(() => {
			expect(getSpy).toHaveBeenCalled();
		});

		await act(async () => {
			await waitFor(() => {
				return result.current.albumQueryLoaded === true;
			});
		});

		expect(result.current.albumQuery).toEqual(mockData.albums.items[0]);
		expect(result.current.albumCoverQuery).toBe('https://example.com/album-cover.jpg');
	});

	it('handles error when fetching data', async () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('stored_access_token');
		const errorMessage = 'Network Error';
		const getSpy = vi.spyOn(axios, 'get').mockRejectedValueOnce(new Error(errorMessage));
		const consoleSpy = vi.spyOn(console, 'log');

		const { result } = renderHook(() => useSpotifySearch('album name'));

		await waitFor(() => {
			expect(getSpy).toHaveBeenCalled();
		});

		await act(async () => {
			await waitFor(() => {
				return result.current.albumQueryLoaded === true;
			});
		});

		expect(result.current.albumQueryLoaded).toBe(false);
		expect(consoleSpy).toHaveBeenCalledWith(new Error(errorMessage));
	});
});
