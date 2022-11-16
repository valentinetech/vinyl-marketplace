import heroImage from 'assets/hero-image.png';
import Button from 'common/components/Button';
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
	const hero = {
		h1: 'Discover the World of Vinyl Records!',
		p: 'The best place to Buy and Sell your Vinyl Collection online!',
		cta: 'Explore!',
		route: '/#featured',
	};
	return (
		<HeroContainer>
			<HeroTextContainer>
				<HeroH1>{hero.h1}</HeroH1>
				<HeroText>{hero.p}</HeroText>
				<HeroImageMobile src={heroImage} alt='hero-image' />
				<HeroButtonContainer smooth to={hero.route}>
					<Button variant='primary'>{hero.cta}</Button>
				</HeroButtonContainer>
			</HeroTextContainer>
			<HeroImageContainer>
				<HeroImage src={heroImage} alt='hero-image' />
			</HeroImageContainer>
		</HeroContainer>
	);
};

export default Hero;
