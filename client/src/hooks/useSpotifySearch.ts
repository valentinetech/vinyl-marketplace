import { useEffect, useState } from 'react';
import useSpotifyToken from 'hooks/useSpotifyToken';

const useSpotifySearch = () => {
  const { token } = useSpotifyToken();

  const [albumId, setAlbumId] = useState<string | null>(null);
  const [artistId, setArtistId] = useState<string | null>(null);

  return { albumId, artistId };
};

export default useSpotifySearch;
