import Button from 'components/elements/Button';
import Card from 'components/elements/Card';
import useSpotifyPreview from 'hooks/useSpotifyPreview';
import { useState, useEffect } from 'react';

import { SectionContainer, SectionName, ExploreContainer, LoadMore } from './Explore.styles';

const Explore = () => {
  const { topAlbums, topAlbumsLoaded } = useSpotifyPreview();
  const [loadMore, setLoadMore] = useState(6);

  const [previewUrl, setPreviewUrl] = useState<string>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(previewUrl);

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!audio.paused);
    return () => {
      audio.pause();
      setIsPlaying(audio.paused);
    };
  }, [previewUrl]);

  console.log(isPlaying);
  console.log(topAlbums);
  // const slice = () => {
  //   topAlbums[-1]? loadMore :
  // }
  return (
    <>
      <SectionContainer id='explore'>
        <SectionName>Explore</SectionName>
      </SectionContainer>
      <ExploreContainer>
        {topAlbumsLoaded === false ? (
          <h2>Loading...</h2>
        ) : (
          topAlbums
            ?.map(({ album, preview_url }) => {
              return (
                <Card
                  key={album.artists[0].id}
                  albumName={album.name}
                  albumCover={album.images[0].url}
                  artistName={album.artists[0].name}
                  setPreviewUrl={() => setPreviewUrl(previewUrl === preview_url ? undefined : preview_url)}
                />
              );
            })
            .slice(0, loadMore)
        )}
      </ExploreContainer>
      <LoadMore>
        <Button onClick={() => setLoadMore((curr) => curr + 3)}>Load More...</Button>
      </LoadMore>
    </>
  );
};

export default Explore;
