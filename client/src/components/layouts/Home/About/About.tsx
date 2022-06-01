import React from 'react';
import styled from 'styled-components';

const aboutData = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';`;

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
        <div>{aboutData}</div>
      </SectionContainer>
    </>
  );
};

export default About;
