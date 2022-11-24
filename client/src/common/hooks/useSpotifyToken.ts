import { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { PostToken } from '../../features/Home/models/Home-models';
const Buffer = require('buffer/').Buffer;

export function useSpotifyToken() {
	const SPOTIFY_ID: string = process.env.REACT_APP_SPOTIFY_ID ?? '';
	const SPOTIFY_SECRET: string = process.env.REACT_APP_SPOTIFY_SECRET ?? '';
	const SPOTIFY_TOKEN: string = Buffer.from(`${SPOTIFY_ID}:${SPOTIFY_SECRET}`).toString('base64');
	const ACCESS_URL: string = 'https://accounts.spotify.com/api/token';
	const GRANT_TYPE: string = qs.stringify({ grant_type: 'client_credentials' });

	const [spotifyToken, setSpotifyToken] = useState<string | null>(null);
	const [spotifyTokenLoaded, setSpotifyTokenLoaded] = useState<boolean>(false);

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
				setSpotifyToken(resp.data.access_token);
			})
			.catch((err: { err: unknown; message: unknown }) => console.log(err.message))
			.finally(() => {
				setSpotifyTokenLoaded(true);
			});

		return () => {
			controller.abort();
		};
	}, [GRANT_TYPE, SPOTIFY_TOKEN]);

	return [spotifyToken, spotifyTokenLoaded];
}

export default useSpotifyToken;
