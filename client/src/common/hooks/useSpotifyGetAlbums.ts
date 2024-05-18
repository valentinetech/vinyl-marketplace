import axios from 'axios';
import useSpotifyToken from 'common/hooks/useSpotifyToken';
import { useEffect, useState } from 'react';
import { GetIds, TopAlbum } from '../models/home.models';

export function useSpotifyGetAlbums() {
	const COUNTRY = 'US';
	const LIMIT = 50;
	const OFFSET_QUERY = 0;
	const MODIFIERS = `?country=${COUNTRY}&limit=${LIMIT}&offset=${OFFSET_QUERY}`;

	const [topAlbums, setTopAlbums] = useState<TopAlbum[] | undefined>();
	const [topAlbumsLoaded, setTopAlbumsLoaded] = useState<boolean>(false);
	const [albumIds, setAlbumIds] = useState<string[]>();

	const [spotifyToken, spotifyTokenLoaded] = useSpotifyToken();

	useEffect(() => {
		const controller = new AbortController();
		if (spotifyToken === null || spotifyTokenLoaded === false) return;
		axios
			.get<GetIds>(`https://api.spotify.com/v1/browse/new-releases${MODIFIERS}`, {
				signal: controller.signal,
				headers: {
					Accept: 'application/json',
					Authorization: `Bearer ${spotifyToken}`,
					'Content-Type': 'application/json',
				},
			})
			.then((resp) => {
				const topAlbumIds = resp.data.albums.items
					.filter((album) => album.album_type === 'album')
					.map((item) => item.artists[0].id);

				setAlbumIds(topAlbumIds);
			})
			.catch((error: unknown) => console.error(error));

		return () => {
			controller.abort();
		};
	}, [spotifyToken, spotifyTokenLoaded, MODIFIERS]);

	useEffect(() => {
		const controller = new AbortController();
		if (spotifyToken === null || spotifyTokenLoaded === false || !albumIds) return;

		Promise.all(
			albumIds.map((id) =>
				axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=${COUNTRY}`, {
					signal: controller.signal,
					headers: {
						Accept: 'application/json',
						Authorization: `Bearer ${spotifyToken}`,
						'Content-Type': 'application/json',
					},
				}),
			),
		)
			.then((resp) => {
				const topAlbumArray: TopAlbum[] = resp
					.map((item) => item.data.tracks[0])
					.filter((item) => {
						return item !== undefined && item.preview_url !== null && item.album.album_type === 'album';
					});

				setTopAlbums(topAlbumArray);
				setTopAlbumsLoaded(true);
			})
			.catch((error: unknown) => console.error(error));

		return () => {
			controller.abort();
		};
	}, [albumIds, spotifyToken, spotifyTokenLoaded]);

	return { topAlbums, topAlbumsLoaded, albumIds };
}

export default useSpotifyGetAlbums;
