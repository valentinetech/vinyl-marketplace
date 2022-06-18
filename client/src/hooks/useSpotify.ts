import { useState, useEffect } from 'react';
import axios from 'axios';
import useSpotifyToken from './useSpotifyToken';

interface ISpotify {
  albums?: { name: string; artist: string }[];
}

interface Payload {
  albums?: {
    name: string;
    artists: [{ name: string }];
  };
}

export function useSpotify() {
  const { token, loaded, error } = useSpotifyToken();

  // const [albums, setAlbums] = useState<Payload>();
  const [albums, setAlbums] = useState<
    {
      name: string;
      id: string;
      artists: [{ name: string }];
      images: [{ url: string }];
    }[]
  >();

  // Get album names

  //Call functions onLoad
  const getAlbum = (token: string | null) => {
    if (token === null) return;
    if (loaded === false) return;
    if (error) return console.log(error);

    const COUNTRY = 'LT';
    const LIMIT = 50;
    const OFFSET_QUERY = 5;

    axios
      .get(`https://api.spotify.com/v1/browse/new-releases?country=${COUNTRY}&limit=${LIMIT}&offset=${OFFSET_QUERY}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => {
        console.log(resp.data.albums.items);

        const albumArray = resp.data.albums.items
          .filter((album: { album_type: string; available_markets: boolean }) => {
            return album.album_type === 'album';
          })
          .slice(0, 6);
        console.log(albumArray);
        setAlbums(albumArray);
      });
  };
  useEffect(() => {
    getAlbum(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return { albums };
}

export default useSpotify;
