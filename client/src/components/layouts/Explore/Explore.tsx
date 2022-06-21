import Button from 'components/elements/Button';
import Card from 'components/elements/Card';
import { CardContainer, SpotifyIconButton, StaticContainer } from 'components/elements/Card/Card.styles';
import useSpotify from 'hooks/useSpotify';

import { SectionContainer, SectionName, ExploreContainer, LoadMore } from './Explore.styles';

const Explore = () => {
  const { topAlbums } = useSpotify();
  return (
    <>
      <SectionContainer id='explore'>
        <SectionName>Explore</SectionName>
      </SectionContainer>
      <ExploreContainer>
        {topAlbums
          ?.map((item) => {
            return (
              <Card
                key={item.album.artists[0].id}
                albumName={item.album.name}
                albumCover={item.album.images[0].url}
                artistName={item.album.artists[0].name}
              />
            );
          })
          .slice(0, 6)}
      </ExploreContainer>
      <LoadMore>
        <Button onClick={() => console.log()}>Load More...</Button>
      </LoadMore>
    </>
  );
};

export default Explore;
