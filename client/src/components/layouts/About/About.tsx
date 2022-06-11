import { aboutData } from '../data/homeData';

import { SectionContainer, SectionName, AboutText } from './About.styles';

const About = () => {
  return (
    <>
      <SectionContainer id='about'>
        <SectionName>About</SectionName>
        <AboutText>{aboutData.p}</AboutText>
      </SectionContainer>
    </>
  );
};

export default About;
