import { AboutEnum } from 'common/enums/aboutEnum';
import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import { AboutText, Section, SectionName } from './About.styles';

const About = () => {
	return (
		<>
			<Header />
			<Section>
				<SectionName>About</SectionName>
				<AboutText>{AboutEnum.par}</AboutText>
			</Section>
			<Footer />
		</>
	);
};

export default About;
