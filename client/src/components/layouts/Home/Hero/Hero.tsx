import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/theme';
import heroImage from '../../../../assets/images/hero-image.png';

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 70px;

  @media ${theme.device.tabletMax} {
    flex-direction: column;
  } ;
`;

export const HeroTextContainer = styled.div`
  width: 50%;
  justify-content: flex-start;
  align-items: right;
  padding-left: 20px;
`;

export const HeroImgContainer = styled.div`
  width: 50%;
`;

export const HeroImage = styled.img`
  max-width: 500px;
  box-shadow: inset 0px 0px 40px 40px ${theme.colors.brand};
  border: 4px outset ${theme.colors.brand};
  -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <h1>Buy and Sell Vinyls!</h1>
      </HeroTextContainer>
      <HeroImgContainer>
        <HeroImage src={heroImage} alt='hero-image' />
      </HeroImgContainer>
    </HeroContainer>
  );
};

export default Hero;
