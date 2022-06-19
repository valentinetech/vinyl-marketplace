import { useState, useEffect } from 'react';
import axios from 'axios';
import useSpotifyToken from './useSpotifyToken';
import { IndexType } from 'typescript';

interface Albums {
  name: string;
  id: string;
  artists: [{ name: string }];
  images: [{ url: string }];
}
interface PreviewURl {
  data: {
    items: {
      preview_url: string;
    }[];
  };
}

const COUNTRY = 'US';
const LIMIT = 50;
const OFFSET_QUERY = 5;
const MODIFIERS = `?country=${COUNTRY}&limit=${LIMIT}&offset=${OFFSET_QUERY}`;

export function useSpotify() {
  const { token, loaded, error } = useSpotifyToken();
  const [albums, setAlbums] = useState<Albums[]>();
  const [albumIds, setAlbumIds] = useState<string[]>();

  const [previewUrl, setPreviewUrl] = useState<PreviewURl[]>();

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
        const albumArray = resp.data.albums.items
          .filter((album: { album_type: string }) => {
            return album.album_type === 'album';
          })
          .slice(0, 6);
        // console.log(albumArray);
        setAlbums(albumArray);

        const albumArrayIds = albumArray.map((item: string, index: number) => albumArray[index].id);
        setAlbumIds(albumArrayIds);

        // console.log(albumArrayIds);
      });
  };

  const getPreview = (albumIds: string[] | null | undefined) => {
    if (!albumIds || albumIds === undefined) return;
    console.log(albumIds);

    Promise.all(
      albumIds.map((id) =>
        axios.get(`https://api.spotify.com/v1/albums/${id}/tracks/${MODIFIERS}`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
      )
    )
      .then((resp) => {
        console.log(resp);

        // const previewUrlArray = resp[0].data.items[0].preview_url;
        const previewUrlArray = resp
          .map((item, index, array) => {
            return array[index].data.items;
          })
          .filter((item, index) => {
            return item[index].preview_url !== null;
          });
        // const previewUrlArray2 = resp.map((data: string[])? => {});

        console.table(previewUrlArray);
      })
      .catch((err: any) => console.log(err.message));
  };

  useEffect(() => {
    getAlbum(token);
    getPreview(albumIds);
    console.log(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return { albums, getPreview, previewUrl };
}

export default useSpotify;
