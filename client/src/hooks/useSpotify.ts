import { useState, useEffect } from 'react';
import axios from 'axios';
import useSpotifyToken from './useSpotifyToken';

interface TopAlbums {
  preview_url: string;
  album: {
    images: [{ url: string }];
    name: string;
    artists: [{ name: string; id: string }];
  };
}

const COUNTRY = 'US';
const LIMIT = 50;
const OFFSET_QUERY = 0;
const MODIFIERS = `?country=${COUNTRY}&limit=${LIMIT}&offset=${OFFSET_QUERY}`;

export function useSpotify() {
  const { token, loaded, error } = useSpotifyToken();
  const [topAlbumsLoaded, setTopAlbumsLoaded] = useState<boolean>(false);
  const [topAlbums, setTopAlbums] = useState<TopAlbums[]>();
  const [albumIds, setAlbumIds] = useState<string[]>();

  // console.log(loaded);
  const getAlbum = (token: string | null) => {
    if (token === null || loaded === false) return;
    if (error) return console.log(error);
    axios
      .get(`https://api.spotify.com/v1/browse/new-releases${MODIFIERS}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => {
        const albumArray = resp.data.albums.items.filter((album: { album_type: string }) => {
          return album.album_type === 'album';
        });
        const albumArrayIds = albumArray.map((item: string, index: number) => albumArray[index].artists[0].id);
        console.log(albumIds);
        setAlbumIds(albumArrayIds);
      });
  };

  const getTopAlbums = (albumIds: string[] | undefined) => {
    if (!albumIds || albumIds === undefined) return;

    console.log(albumIds);
    Promise.all(
      albumIds.map((id) =>
        axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=${COUNTRY}`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
      )
    )
      .then((resp) => {
        const topAlbumArray = resp
          .map((item, index, array) => array[index].data.tracks[0])
          .filter((item) => {
            return item !== undefined;
          });
        setTopAlbums(topAlbumArray);
        setTopAlbumsLoaded(true);
      })
      .catch((err: { err: unknown; message: unknown }) => console.log(err.message));
  };

  useEffect(() => {
    getAlbum(token);
    getTopAlbums(albumIds);
  }, [token]);

  return { getTopAlbums, topAlbums, topAlbumsLoaded };
}

export default useSpotify;
