import Button from 'components/elements/Button';
import Card from 'components/elements/Card';

import { SectionContainer, SectionName, ExploreContainer, LoadMore } from './Explore.styles';

const Explore = () => {
  return (
    <>
      <SectionContainer>
        <SectionName>Explore</SectionName>
      </SectionContainer>
      <ExploreContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ExploreContainer>
      <LoadMore>
        <Button>Load More...</Button>
      </LoadMore>
    </>
  );
};

function handleClick() {}
// Grid container + map out

export default Explore;
