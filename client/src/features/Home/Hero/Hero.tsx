import heroImage from 'assets/hero-image.png';
import Button from 'common/components/Button';
import { HeroEnum } from 'common/enums/heroEnum';
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
				<HeroH1>{HeroEnum.header}</HeroH1>
				<HeroText>{HeroEnum.par}</HeroText>
				<HeroImageMobile src={heroImage} alt="hero-image" />
				<HeroButtonContainer smooth to={HeroEnum.route}>
					<Button variant="primary">{HeroEnum.cta}</Button>
				</HeroButtonContainer>
			</HeroTextContainer>
			<HeroImageContainer>
				<HeroImage src={heroImage} alt="hero-image" />
			</HeroImageContainer>
		</HeroContainer>
	);
};

export default Hero;
