import { useState, useEffect } from 'react';
import axios from 'axios';

export interface SpotifyApi {
  id: string;
  url: string;
  song: string;
  loading: boolean;
  error: string;
}

export function useSpotify<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
  error: string | null;
} {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('url')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setDone(false);
      });
  }, [url]);

  // const getSong = (id: string) => {
  //   return id + 1;
  // };
  // function playSong({ id }: { id: string }) {}

  return { data, done, error };
}

export default useSpotify;
