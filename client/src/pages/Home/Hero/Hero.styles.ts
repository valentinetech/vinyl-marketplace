import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { Link as LinkS } from 'react-scroll';

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
  padding-left: 20px;
  padding-right: 20px;

  @media ${theme.device.tabletMax} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } ;
`;

export const HeroH1 = styled.h1`
  line-height: 70px;
  text-align: right;

  @media ${theme.device.tabletMax} {
    margin-top: -20px;
    text-align: center;
  } ;
`;

export const HeroText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-style: italic;
  opacity: 0.6;
  text-align: right;

  @media ${theme.device.tabletMax} {
    display: flex;
    text-align: center;
  } ;
`;

export const HeroButtonContainer = styled(LinkS)`
  display: flex;
  margin-top: 50px;
  justify-content: flex-end;

  @media ${theme.device.tabletMax} {
    justify-content: center;
    align-items: center;
  } ;
`;

export const HeroImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;

export const HeroImage = styled.img`
  max-width: 460px;
  max-height: 460px;

  box-shadow: inset 0px 0px 40px 40px ${theme.colors.brand};
  border: 4px outset ${theme.colors.brand};
  border-radius: 10%;
  -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);

  @media ${theme.device.tabletMax} {
    display: none;
  } ;
`;

export const HeroImageMobile = styled.img`
  display: none;

  max-width: 500px;
  box-shadow: inset 0px 0px 40px 40px ${theme.colors.brand};
  border: 4px outset ${theme.colors.brand};
  -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);

  @media ${theme.device.tabletMax} {
    display: flex;
    max-width: 80%;
    margin: 20px 20px 0 20px;
    padding: 5px;
  } ;
`;
