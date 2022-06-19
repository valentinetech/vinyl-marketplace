import Button from 'components/elements/Button';
import Card from 'components/elements/Card';
import { CardContainer, SpotifyIconButton, StaticContainer } from 'components/elements/Card/Card.styles';
import useSpotify from 'hooks/useSpotify';

import { SectionContainer, SectionName, ExploreContainer, LoadMore } from './Explore.styles';

const Explore = () => {
  const { albums, getPreview, previewUrl } = useSpotify();
  return (
    <>
      <SectionContainer id='explore'>
        <SectionName>Explore</SectionName>
        <h6>{previewUrl}</h6>
      </SectionContainer>
      <ExploreContainer>
        {albums?.map((album) => {
          return (
            <Card
              key={album.id}
              albumName={album.name}
              albumCover={album.images[0].url}
              artistName={album.artists[0].name}
            />
          );
        })}
      </ExploreContainer>
      <LoadMore>
        <Button onClick={() => console.log('spotify')}>Load More...</Button>
      </LoadMore>
    </>
  );
};

export default Explore;
