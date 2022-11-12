import { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { GetIds, PostToken, TopAlbum } from '../models/Home.models';
const Buffer = require('buffer/').Buffer;

export function useSpotifyPreview() {
	const COUNTRY: string = 'US';
	const LIMIT: number = 50;
	const OFFSET_QUERY: number = 0;
	const MODIFIERS: string = `?country=${COUNTRY}&limit=${LIMIT}&offset=${OFFSET_QUERY}`;

	const SPOTIFY_ID: string = process.env.REACT_APP_SPOTIFY_ID ?? '';
	const SPOTIFY_SECRET: string = process.env.REACT_APP_SPOTIFY_SECRET ?? '';
	const SPOTIFY_TOKEN: string = Buffer.from(`${SPOTIFY_ID}:${SPOTIFY_SECRET}`).toString('base64');
	const ACCESS_URL: string = 'https://accounts.spotify.com/api/token';
	const GRANT_TYPE: string = qs.stringify({ grant_type: 'client_credentials' });

	const [topAlbums, setTopAlbums] = useState<TopAlbum[] | undefined>();
	const [topAlbumsLoaded, setTopAlbumsLoaded] = useState<boolean>(false);
	const [albumIds, setAlbumIds] = useState<string[]>();
	const [token, setToken] = useState<string | null>(null);
	const [loaded, setLoaded] = useState<boolean>(false);

	useEffect(() => {
		const controller = new AbortController();
		axios
			.post<PostToken>(ACCESS_URL, GRANT_TYPE, {
				signal: controller.signal,
				headers: {
					Authorization: `Basic ${SPOTIFY_TOKEN}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			})
			.then((resp) => {
				setToken(resp.data.access_token);
			})
			.catch((err: { err: unknown; message: unknown }) => console.log(err.message))
			.finally(() => {
				setLoaded(true);
			});

		return () => {
			controller.abort();
		};
	}, [GRANT_TYPE, SPOTIFY_TOKEN]);

	useEffect(() => {
		const controller = new AbortController();
		if (token === null || loaded === false) return;
		axios
			.get<GetIds>(`https://api.spotify.com/v1/browse/new-releases${MODIFIERS}`, {
				signal: controller.signal,
				headers: {
					Accept: 'application/json',
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			})
			.then((resp) => {
				const albumArray = resp.data.albums.items.filter((album) => {
					return album.album_type === 'album';
				});
				const albumArrayIds = albumArray.map((item) => item.artists[0].id);

				setAlbumIds(albumArrayIds);
			})
			.catch((err: { err: unknown; message: unknown }) => console.log(err.message));

		return () => {
			controller.abort();
		};
	}, [token, loaded, MODIFIERS]);

	useEffect(() => {
		const controller = new AbortController();
		if (token === null || loaded === false) return;
		if (!albumIds || albumIds === undefined) return;

		Promise.all(
			albumIds.map((id) =>
				axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=${COUNTRY}`, {
					signal: controller.signal,
					headers: {
						Accept: 'application/json',
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				})
			)
		)
			.then((resp) => {
				const topAlbumArray: TopAlbum[] = resp
					.map((item) => item.data.tracks[0])
					.filter((item) => {
						return item !== undefined && item.preview_url !== null;
					})
					.filter((item) => {
						return item.album.album_type === 'album';
					});

				setTopAlbums(topAlbumArray);
				setTopAlbumsLoaded(true);
			})
			.catch((err: { err: unknown; message: unknown }) => console.log(err.message));

		return () => {
			controller.abort();
		};
	}, [albumIds, token, loaded]);

	return { topAlbums, topAlbumsLoaded, albumIds };
}

export default useSpotifyPreview;
