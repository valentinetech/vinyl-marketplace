import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { sessionStorageMock } from 'vitest.setup';
import useSpotifyToken from './useSpotifyToken';

// Mock environment variables
vi.stubEnv('VITE_SPOTIFY_ID', 'test_spotify_id');
vi.stubEnv('VITE_SPOTIFY_SECRET', 'test_spotify_secret');

// Mock axios
vi.mock('axios');

describe('useSpotifyToken', () => {
	beforeEach(() => {
		sessionStorageMock.clear();
	});

	it('fetches and sets the Spotify token from the API', async () => {
		const mockResponse = { data: { access_token: 'test_access_token' } };
		const axiosSpy = vi.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse);
		const setItemSpy = vi.spyOn(sessionStorage, 'setItem');
		const { result } = renderHook(() => useSpotifyToken());

		await waitFor(() => {
			expect(result.current[0]).toBe('test_access_token');
			expect(result.current[1]).toBe(true);
		});
		expect(setItemSpy).toHaveBeenCalledWith('spotifyToken', 'test_access_token');
		expect(axiosSpy).toHaveBeenCalledWith('https://accounts.spotify.com/api/token', expect.any(String), {
			signal: expect.any(AbortSignal),
			headers: {
				Authorization: `Basic ${Buffer.from('test_spotify_id:test_spotify_secret').toString('base64')}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
	});
	it('uses the token from sessionStorage if available', async () => {
		vi.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('stored_access_token');
		const mockResponse = { data: { access_token: 'test_access_token' } };
		const { result } = renderHook(() => useSpotifyToken());
		const axiosSpy = vi.spyOn(axios, 'post').mockResolvedValue(mockResponse);
		await waitFor(() => {
			expect(result.current[0]).toBe('stored_access_token');
			expect(result.current[1]).toBe(true);
		});

		expect(axiosSpy).not.toHaveBeenCalled();
	});

	it('handles API errors gracefully', async () => {
		const mockError = new Error('Internal Server Error');
		vi.spyOn(axios, 'post').mockRejectedValueOnce(mockError);

		const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {
			('');
		});

		const { result } = renderHook(() => useSpotifyToken());

		await waitFor(() => {
			expect(result.current[0]).toBe(null);
			expect(result.current[1]).toBe(true);
			expect(consoleSpy).toHaveBeenCalledWith('Internal Server Error');
		});

		consoleSpy.mockRestore();
	});
});
