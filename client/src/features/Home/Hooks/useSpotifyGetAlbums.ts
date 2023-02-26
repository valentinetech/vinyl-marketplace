import { useState, useEffect } from 'react';
import axios from 'axios';
import useSpotifyToken from 'common/hooks/useSpotifyToken';

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
      .catch((err: { err: unknown; message: unknown }) => console.log(err.message));

    return () => {
      controller.abort();
    };
  }, [spotifyToken, spotifyTokenLoaded, MODIFIERS]);

  useEffect(() => {
    const controller = new AbortController();
    if (spotifyToken === null || spotifyTokenLoaded === false) return;
    if (!albumIds || albumIds === undefined) return;

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
      .catch((err: { err: unknown; message: unknown }) => console.log(err.message));

    return () => {
      controller.abort();
    };
  }, [albumIds, spotifyToken, spotifyTokenLoaded]);

  return { topAlbums, topAlbumsLoaded, albumIds };
}

export default useSpotifyGetAlbums;

export interface TopAlbum {
  preview_url: string;
  album: {
    images: [
      {
        url: string;
      },
    ];
    name: string;
    artists: [
      {
        name: string;
        id: string;
      },
    ];
  };
}

export interface PostToken {
  ACCESS_URL: string;
  GRANT_TYPE: string;
  access_token: string;
}

export interface GetIds {
  albums: {
    items: [
      {
        album_type: string;
        artists: [
          {
            id: string;
          },
        ];
      },
    ];
  };
}
