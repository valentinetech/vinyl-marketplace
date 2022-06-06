import styled from 'styled-components';
import { aboutData } from '../data/homeData';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: flex-start;
  margin-top: 50px;
`;

const About = () => {
  return (
    <>
      <SectionContainer>
        <h2>About</h2>
        <div>{aboutData.p}</div>
      </SectionContainer>
    </>
  );
};

export default About;
