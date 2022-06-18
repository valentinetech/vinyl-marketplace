import { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { process } from 'types/envTypes';
const Buffer = require('buffer/').Buffer;

export function useSpotifyToken() {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  //Get Spotify Authentication

  useEffect(() => {
    const SPOTIFY_ID: string = process.env.REACT_APP_SPOTIFY_ID;
    const SPOTIFY_SECRET: string = process.env.REACT_APP_SPOTIFY_SECRET;
    const SPOTIFY_TOKEN: string = Buffer.from(`${SPOTIFY_ID}:${SPOTIFY_SECRET}`).toString('base64');
    const ACCESS_URL: string = 'https:accounts.spotify.com/api/token';
    const GRANT_TYPE: string = qs.stringify({ grant_type: 'client_credentials' });

    axios
      .post(ACCESS_URL, GRANT_TYPE, {
        headers: {
          Authorization: `Basic ${SPOTIFY_TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        setToken(response.data.access_token);
        console.log(token);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoaded(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { token, error, loaded };
}

export default useSpotifyToken;
