import Button from 'components/elements/Button';
import Card from 'components/elements/Card';
import useSpotifyPreview from 'hooks/useSpotifyPreview';
import { useState } from 'react';

import { SectionContainer, SectionName, ExploreContainer, LoadMore } from './Explore.styles';

const Explore = () => {
  const { topAlbums, topAlbumsLoaded } = useSpotifyPreview();
  const [loadMore, setLoadMore] = useState(6);

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
            ?.map((item) => {
              return (
                <Card
                  key={item.album.artists[0].id}
                  albumName={item.album.name}
                  albumCover={item.album.images[0].url}
                  artistName={item.album.artists[0].name}
                  spotifyButton={item.preview_url}
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
