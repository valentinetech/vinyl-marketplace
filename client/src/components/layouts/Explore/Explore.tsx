import Button from 'components/elements/Button';
import Card from 'components/elements/Card';
import cardData from 'components/layouts/data/cardData';
import useSpotify from 'hooks/useSpotify';

import { SectionContainer, SectionName, ExploreContainer, LoadMore } from './Explore.styles';

const Explore = () => {
  const { albums } = useSpotify();
  return (
    <>
      <SectionContainer id='explore'>
        <SectionName>Explore</SectionName>
      </SectionContainer>
      <ExploreContainer>
        {albums?.map((item) => {
          return (
            <Card
              key={item.id}
              albumName={item.name}
              albumCover={item.images[0].url}
              artistName={item.artists[0].name}
            />
          );
        })}
      </ExploreContainer>
      <LoadMore>
        <Button>Load More...</Button>
      </LoadMore>
    </>
  );
};

export default Explore;
