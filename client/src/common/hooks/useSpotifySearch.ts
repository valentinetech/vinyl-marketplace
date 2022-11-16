import { useState, useEffect } from 'react';
import axios from 'axios';
import useSpotifyToken from './useSpotifyToken';
import { IAlbum, IAlbumQuery } from 'common/models/spotify.models';

export function useSpotifySearch(searchQuery: string) {
	const COUNTRY: string = 'US';
	const LIMIT: number = 50;
	const OFFSET_QUERY: number = 0;
	const SEARCH_TYPE: string = 'album';
	const MODIFIERS: string = `market=${COUNTRY}&limit=${LIMIT}&offset=${OFFSET_QUERY}`;

	const [albumQueryLoaded, setAlbumQueryLoaded] = useState<boolean>(false);
	const [albumQuery, setAlbumQuery] = useState<IAlbum[]>();

	const [spotifyToken, spotifyTokenLoaded] = useSpotifyToken();

	useEffect(() => {
		const controller = new AbortController();
		if (spotifyToken === null || spotifyTokenLoaded === false) return;

		axios
			.get<IAlbumQuery>(`https://api.spotify.com/v1/search?q=${searchQuery}&type=${SEARCH_TYPE}&${MODIFIERS}`, {
				signal: controller.signal,
				headers: {
					Accept: 'application/json',
					Authorization: `Bearer ${spotifyToken}`,
					'Content-Type': 'application/json',
				},
			})
			.then((resp) => {
				const albumQuery = resp.data.albums.items.filter((album) => album.album_type === 'album').map((obj) => obj);

				setAlbumQuery(albumQuery);
				setAlbumQueryLoaded(true);
			})
			.catch((err: { err: unknown; message: unknown }) => console.log(err.message));

		return () => {
			controller.abort();
		};
	}, [spotifyToken, spotifyTokenLoaded, MODIFIERS, searchQuery]);

	return { albumQuery, albumQueryLoaded };
}

export default useSpotifySearch;
