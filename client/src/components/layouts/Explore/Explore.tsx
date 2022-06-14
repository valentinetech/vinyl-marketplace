import Button from 'components/elements/Button';
import Card from 'components/elements/Card';
import cardData from 'components/layouts/data/cardData';
import useSpotify from 'hooks/useSpotify';

import { SectionContainer, SectionName, ExploreContainer, LoadMore } from './Explore.styles';

const Explore = () => {
  const { access, getToken, albums } = useSpotify();
  console.log(albums);
  return (
    <>
      <SectionContainer id='explore'>
        <SectionName>Explore</SectionName>
        <h6>
          {JSON.parse(JSON.stringify(albums)).map((album: string, i: number) => {
            return <h3 key={album}> {album}</h3>;
          })}
        </h6>
        <h6>{albums[1]}</h6>
      </SectionContainer>
      <Button onClick={getToken}>sdasd</Button>
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
