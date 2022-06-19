import { useState, useEffect } from 'react';
// import axios from 'axios';
// import useSpotifyToken from './useSpotifyToken';
// import useSpotify from './useSpotify';

// interface Tracks {
//   name: string;
//   id: string;
//   artists: [{ name: string }];
//   images: [{ url: string }];
// }

// export function useSpotify() {
//   const { token, loaded, error } = useSpotifyToken();
// const { albumIds } = useSpotify();

//   const [, setAlbums] = useState<Tracks[]>();

//   const getPreview = (token: string | null) => {
//     if (token === null) return;
//     if (loaded === false) return;
//     if (error) return console.log(error);

//     const id = '11dFghVXANMlKmJXsNCbNl';
//     const COUNTRY = 'LT';
//     const LIMIT = 50;
//     const OFFSET_QUERY = 5;
//     const MODIFIERS = `?country=${COUNTRY}&limit=${LIMIT}&offset=${OFFSET_QUERY}`;

//     axios
//       .get(`https://api.spotify.com/v1/albums/${id}/tracks/${MODIFIERS}`, {
//         headers: {
//           Accept: 'application/json',
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       })
//       .then((resp) => {
//         console.log(resp.data.albums.items);

//         const albumArray = resp.data.albums.items
//           .filter((album: { album_type: string; available_markets: boolean }) => {
//             return album.album_type === 'album';
//           })
//           .slice(0, 6);
//         console.log(albumArray);
//         setAlbums(albumArray);
//       });
//   };
//   useEffect(() => {
//     getPreview(token);
//     console.log(token);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [token]);

//   return { track };
// }

// export default useSpotify;
