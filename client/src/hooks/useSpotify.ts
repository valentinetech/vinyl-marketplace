import { useState, useEffect } from 'react';
import axios from 'axios';

interface useSpotifyProps {
  url: string;
  song: string;
  loading: boolean;
  error: string;
  setSong: () => void;
  setLoading: () => void;
  setError: () => void;
}

const useSpotify = (url: useSpotifyProps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('url')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    axios
      .get('url')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, refetch };
};

export default useSpotify;
