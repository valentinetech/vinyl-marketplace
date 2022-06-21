import { useState, useEffect } from 'react';
import axios from 'axios';
import useSpotifyToken from './useSpotifyToken';

interface Albums {
  name: string;
  id: string;
  artists: [{ name: string }];
  images: [{ url: string }];
}

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
  const [topAlbums, setTopAlbums] = useState<TopAlbums[]>();
  const [albumIds, setAlbumIds] = useState<string[]>();

  // const [previewUrl, setPreviewUrl] = useState<PreviewURl[]>();

  const getAlbum = (token: string | null) => {
    if (token === null) return;
    if (loaded === false) return;
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
        setAlbumIds(albumArrayIds);
      });
  };

  const getTopAlbums = (albumIds: string[] | null | undefined) => {
    if (!albumIds || albumIds === undefined) return;

    console.log(albumIds);
    const getAlbumIds = albumIds;
    Promise.all(
      getAlbumIds.map((id) =>
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
        const topAlbumArray = resp.map((item, index, array) => array[index].data.tracks[0]);
        setTopAlbums(topAlbumArray);
      })
      .catch((err: { err: unknown; message: unknown }) => console.log(err.message));
  };

  useEffect(() => {
    getAlbum(token);
    getTopAlbums(albumIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return { getTopAlbums, topAlbums };
}

export default useSpotify;
