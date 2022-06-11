import heroImage from 'assets/images/hero-image.png';
import { heroData } from '../data/homeData';
import Button from 'components/elements/Button';
import {
  HeroContainer,
  HeroTextContainer,
  HeroH1,
  HeroText,
  HeroImageMobile,
  HeroButtonContainer,
  HeroImageContainer,
  HeroImage,
} from './Hero.styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroH1>{heroData.h1}</HeroH1>
        <HeroText>{heroData.p}</HeroText>
        <HeroImageMobile src={heroImage} alt='hero-image' />
        <HeroButtonContainer to={heroData.route} duration={500} smooth={true} offset={-80}>
          <Button variant='primary'>{heroData.cta}</Button>
        </HeroButtonContainer>
      </HeroTextContainer>
      <HeroImageContainer>
        <HeroImage src={heroImage} alt='hero-image' />
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default Hero;
