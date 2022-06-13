import { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { process } from 'types/envTypes';
const Buffer = require('buffer/').Buffer;

export interface SpotifyApi {
  id: string;
  url: string;
  song: string;
  loading: boolean;
  error: string;
}

interface SpotifyProps {
  access: string | null;
  loaded: boolean;
  error: string | null;
  getToken?: () => void;
  albums: string[] | Object;
}
//Get token
export function useSpotify(): SpotifyProps {
  const [access, setAccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  function getToken() {
    const SPOTIFY_ID = process.env.REACT_APP_SPOTIFY_ID;
    const SPOTIFY_SECRET = process.env.REACT_APP_SPOTIFY_SECRET;
    const SPOTIFY_TOKEN = Buffer.from(`${SPOTIFY_ID}:${SPOTIFY_SECRET}`).toString('base64');
    const ACCESS_URL = 'https:accounts.spotify.com/api/token';
    const GRANT_TYPE = qs.stringify({ grant_type: 'client_credentials' });

    axios
      .post(ACCESS_URL, GRANT_TYPE, {
        headers: {
          Authorization: `Basic ${SPOTIFY_TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        const token = response.data.access_token;
        window.localStorage.setItem('token', token);
        setAccess(response.data.access_token);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoaded(true);
      });
  }
  // Get album names
  const [albums, setAlbums] = useState<Object>({});
  const getAlbum = () => {
    let token = window.localStorage.getItem('token');

    const id = '1atjqOZTCdrjxjMyCPZc2g?si=REc5N11SSPehWtwEKo-6XA';
    axios
      .get(`https://api.spotify.com/v1/albums/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.table(resp);
        setAlbums(resp.data);
      });
  };

  let albumOne = window.localStorage.getItem('albumOne');

  console.log(albumOne);
  useEffect(() => {
    getToken();
    getAlbum();
  }, []);

  return { access, error, loaded, getToken, albums };
}

export default useSpotify;
