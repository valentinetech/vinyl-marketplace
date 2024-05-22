import axios from 'axios';
import { IAlbum, IAlbumQuery } from 'common/models/spotify.models';
import { useEffect, useState } from 'react';
import useSpotifyToken from './useSpotifyToken';

export function useSpotifySearch(albumName: string): [IAlbum, boolean, string] {
	const COUNTRY = 'US';
	const LIMIT = 50;
	const OFFSET_QUERY = 0;
	const SEARCH_TYPE = 'album';
	const MODIFIERS = `market=${COUNTRY}&limit=${LIMIT}&offset=${OFFSET_QUERY}`;

	const [albumQueryLoaded, setAlbumQueryLoaded] = useState<boolean>(false);
	const [albumQuery, setAlbumQuery] = useState<IAlbum[]>([]);
	const [albumCoverQuery, setAlbumCoverQuery] = useState<string>('');
	const [spotifyToken, spotifyTokenLoaded] = useSpotifyToken();

	useEffect(() => {
		const controller = new AbortController();
		if (spotifyToken === null || spotifyTokenLoaded === false || albumName === '') return;

		axios
			.get<IAlbumQuery>(`https://api.spotify.com/v1/search?q=${albumName}&type=${SEARCH_TYPE}&${MODIFIERS}`, {
				signal: controller.signal,
				headers: {
					Accept: 'application/json',
					Authorization: `Bearer ${spotifyToken}`,
					'Content-Type': 'application/json',
				},
			})
			.then((resp) => {
				const albumQuery: IAlbum[] = resp.data.albums.items
					.filter((album) => album.album_type === 'album')
					.map((obj) => obj);
				const albumCoverQuery: string = albumQuery[0].images[0].url;

				setAlbumCoverQuery(albumCoverQuery);
				setAlbumQuery(albumQuery);
				setAlbumQueryLoaded(true);
			})
			.catch((error: unknown) => {
				if (error instanceof Error && error.message !== 'canceled' && !error.message.includes('400')) {
					console.log(error);
				}
			});

		return () => {
			controller.abort();
		};
	}, [spotifyToken, spotifyTokenLoaded, MODIFIERS, albumName]);

	return [albumQuery[0], albumQueryLoaded, albumCoverQuery];
}

export default useSpotifySearch;
