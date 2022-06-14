import axios from 'axios';

const id: string = '1atjqOZTCdrjxjMyCPZc2g?si=REc5N11SSPehWtwEKo-6XA';
const BASE_URL: string = `https://api.spotify.com/v1/albums/${id}`;

let token: string = '';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
