import Card from './Card';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: flex-start;
`;

const ExploreContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 50px;
  justify-content: space-between;
`;

const Explore = () => {
  return (
    <>
      <SectionContainer>
        <h2>Explore</h2>
      </SectionContainer>
      <ExploreContainer>
        <Card />
        <Card />
        <Card />
      </ExploreContainer>
    </>
  );
};

export default Explore;
