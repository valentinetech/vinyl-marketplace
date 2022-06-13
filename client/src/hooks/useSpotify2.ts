import { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'dotenv/config';

// export interface SpotifyApi {
//   id: string;
//   url: string;
//   song: string;
//   loading: boolean;
//   error: string;
// }

// export function useSpotify2<Payload>(url: string) {
//   const [token, setToken] = useState('');
//   const [tracks, setTracks] = useState([]);

//   const id = '2YZyLoL8N0Wb9xBt1NhZWg';
//   const market = 'US';

//   useEffect(() => {
//     axios('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Authorization: 'Basic ' + new Buffer('Your Client ID' + ':' + 'Your Client Secret').toString('base64'),
//       },
//       data: 'grant_type=client_credentials',
//     })
//       .then((tokenresponse) => {
//         console.log(tokenresponse.data.access_token);
//         setToken(tokenresponse.data.access_token);

//         // Api call for retrieving tracks data
//         axios(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//             Authorization: 'Bearer ' + tokenresponse.data.access_token,
//           },
//         })
//           .then((trackresponse) => {
//             console.log(trackresponse.data.tracks);
//             setTracks(trackresponse.data.tracks);
//           })
//           .catch((error) => console.log(error));
//       })
//       .catch((error) => console.log(error));
//   }, []);
// }

// // export default useSpotify;
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export interface SpotifyApi {
//   id: string;
//   url: string;
//   song: string;
//   loading: boolean;
//   error: string;
// }

// export function useSpotify<Payload>(url: string): {
//   data: Payload | null;
//   done: boolean;
//   error: string | null;
// } {
//   const [data, setData] = useState<Payload | null>(null);
//   const [done, setDone] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     axios
//       .get('url')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((err) => {
//         setError(err);
//       })
//       .finally(() => {
//         setDone(false);
//       });
//   }, [url]);

//   return { data, done, error };
// }

// export default useSpotify;
