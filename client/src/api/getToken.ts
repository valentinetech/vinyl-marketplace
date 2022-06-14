import { useState, useEffect } from 'react';
// import axios from 'axios';
// import qs from 'qs';
// import { process } from 'types/envTypes';
// const Buffer = require('buffer/').Buffer;

// interface TokenProps {
//   access: string | null;
//   loaded: boolean;
//   error: string | null;
//   getToken?: () => void;
//   albums: string[] | Object;
// }
// //Get token
// const [access, setAccess] = useState<string | null>(null);
// const [error, setError] = useState<string | null>(null);
// const [loaded, setLoaded] = useState(false);

// function getToken() {
//   const SPOTIFY_ID = process.env.REACT_APP_SPOTIFY_ID;
//   const SPOTIFY_SECRET = process.env.REACT_APP_SPOTIFY_SECRET;
//   const SPOTIFY_TOKEN = Buffer.from(`${SPOTIFY_ID}:${SPOTIFY_SECRET}`).toString('base64');
//   const ACCESS_URL = 'https:accounts.spotify.com/api/token';
//   const GRANT_TYPE = qs.stringify({ grant_type: 'client_credentials' });

//   export default axios.create({
//     baseURL: BASE_URL,
//     headers: {
//       Authorization: `Basic ${SPOTIFY_TOKEN}`,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   });
// }
