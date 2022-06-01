import React from 'react';
import styled from 'styled-components';
import albumImage from '../../../../assets/images/hero-image.png';

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

const CardContainer = styled.div`
  height: 450px;
  width: 350px;
  border: 1px solid #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const CardImg = styled.img`
  width: 250px;
  height: 250px;
  padding: 0px;
`;

const Explore = () => {
  return (
    <>
      <SectionContainer>
        <h2>Explore</h2>
      </SectionContainer>
      <ExploreContainer>
        <CardContainer>
          <CardImg src={albumImage}></CardImg>
        </CardContainer>
        <CardContainer>
          <CardImg src={albumImage}></CardImg>
        </CardContainer>
        <CardContainer>
          <CardImg src={albumImage}></CardImg>
        </CardContainer>
      </ExploreContainer>
    </>
  );
};

export default Explore;
