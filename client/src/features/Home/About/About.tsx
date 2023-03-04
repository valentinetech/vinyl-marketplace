import { AboutEnum } from 'common/enums/aboutEnum';
import { SectionContainer, SectionName, AboutText } from './About.styles';

const About = () => {
	return (
		<>
			<SectionContainer id="about">
				<SectionName>About</SectionName>
				<AboutText>{AboutEnum.par}</AboutText>
			</SectionContainer>
		</>
	);
};

export default About;
