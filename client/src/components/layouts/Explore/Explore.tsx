import Button from 'components/elements/Button';
import Card from 'components/elements/Card';
import cardData from 'components/layouts/data/cardData';
import useSpotify from 'hooks/useSpotify';

import { SectionContainer, SectionName, ExploreContainer, LoadMore } from './Explore.styles';

const Explore = () => {
  const { access, albums } = useSpotify();
  console.log('thsi  ' + albums);
  return (
    <>
      <SectionContainer id='explore'>
        <SectionName>Explore</SectionName>
        {/* <h6>{albums.name}</h6> */}
      </SectionContainer>
      <ExploreContainer>
        {cardData.map((item) => {
          return (
            <Card
              key={item.id}
              albumName={item.albumName}
              albumCover={item.albumCover}
              artistName={item.artistName}
              spotifyButton={item.spotifyButton}
              countdownTitle={item.countdownTitle}
              countdown={item.countdown}
              bidLast={item.bidLast}
              buttonText={item.buttonText}
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
