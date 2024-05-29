import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import useSpotifyToken from 'common/hooks/useSpotifyToken';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import useSpotifyGetAlbums from './useSpotifyGetAlbums';

vi.stubEnv('VITE_SPOTIFY_ID', 'test_spotify_id');
vi.stubEnv('VITE_SPOTIFY_SECRET', 'test_spotify_secret');
vi.mock('axios');
vi.mock('common/hooks/useSpotifyToken');

describe('useSpotifyGetAlbums', () => {
	beforeEach(() => {
		vi.resetAllMocks();
	});

	// it('fetches new releases and top tracks', async () => {
	// 	vi.mocked(useSpotifyToken).mockReturnValue(['mock_spotify_token', true]);

	// 	const axiosGetSpy = vi.spyOn(axios, 'get');
	// 	axiosGetSpy
	// 		.mockResolvedValueOnce({
	// 			data: { albums: { items: [{ album_type: 'album', artists: [{ id: 'artist1' }] }] } },
	// 		})
	// 		.mockResolvedValueOnce({
	// 			data: {
	// 				tracks: [
	// 					{
	// 						album: { album_type: 'album' },
	// 						artists: [{ id: 'artist1' }],
	// 						preview_url: 'http://preview-url/artist1',
	// 					},
	// 				],
	// 			},
	// 		})
	// 		.mockResolvedValueOnce({
	// 			data: {
	// 				tracks: [
	// 					{
	// 						album: { album_type: 'album' },
	// 						artists: [{ id: 'artist2' }],
	// 						preview_url: 'http://preview-url/artist2',
	// 					},
	// 				],
	// 			},
	// 		});

	// 	const { result } = renderHook(() => useSpotifyGetAlbums());

	// 	await waitFor(() => {
	// 		expect(result.current.albumIds).toEqual(['artist1']);
	// 	});

	// 	await waitFor(() => {
	// 		expect(result.current.topAlbums).toEqual([
	// 			{
	// 				album: { album_type: 'album' },
	// 				artists: [{ id: 'artist1' }],
	// 				preview_url: 'http://preview-url/artist1',
	// 			},
	// 			// {
	// 			// 	album: { album_type: 'album' },
	// 			// 	artists: [{ id: 'artist2' }],
	// 			// 	preview_url: 'http://preview-url/artist2',
	// 			// },
	// 		]);
	// 		expect(result.current.topAlbumsLoaded).toBe(true);
	// 	});

	// 	expect(axiosGetSpy).toHaveBeenCalledWith(
	// 		'https://api.spotify.com/v1/browse/new-releases?country=US&limit=50&offset=0',
	// 		{
	// 			headers: {
	// 				Accept: 'application/json',
	// 				Authorization: 'Bearer mock_spotify_token',
	// 				'Content-Type': 'application/json',
	// 			},
	// 		},
	// 	),
	// 		expect(axiosGetSpy).toHaveBeenCalledWith(
	// 			'https://api.spotify.com/v1/artists/artist1/top-tracks?market=US',
	// 			expect.objectContaining({
	// 				headers: {
	// 					Accept: 'application/json',
	// 					Authorization: 'Bearer mock_spotify_token',
	// 					'Content-Type': 'application/json',
	// 				},
	// 			}),
	// 		);

	// 	expect(axiosGetSpy).toHaveBeenCalledWith(
	// 		'https://api.spotify.com/v1/artists/artist2/top-tracks?market=US',
	// 		expect.objectContaining({
	// 			headers: {
	// 				Accept: 'application/json',
	// 				Authorization: 'Bearer mock_spotify_token',
	// 				'Content-Type': 'application/json',
	// 			},
	// 		}),
	// 	);
	// });

	it('handles API errors gracefully', async () => {
		vi.mocked(useSpotifyToken).mockReturnValue(['mock_spotify_token', true]);

		const mockError = new Error('Internal Server Error');
		vi.spyOn(axios, 'get').mockRejectedValueOnce(mockError);

		const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {
			('');
		});

		const { result } = renderHook(() => useSpotifyGetAlbums());

		await waitFor(() => {
			expect(result.current.albumIds).toBeUndefined();
		});

		expect(consoleSpy).toHaveBeenCalledWith(mockError);
		consoleSpy.mockRestore();
	});

	it('does not make API requests if the token is not loaded', async () => {
		vi.mocked(useSpotifyToken).mockReturnValue([null, false]);

		const axiosGetSpy = vi.spyOn(axios, 'get');

		const { result } = renderHook(() => useSpotifyGetAlbums());

		await waitFor(() => {
			expect(result.current.albumIds).toBeUndefined();
			expect(result.current.topAlbums).toBeUndefined();
			expect(result.current.topAlbumsLoaded).toBe(false);
		});

		expect(axiosGetSpy).not.toHaveBeenCalled();
	});
});
