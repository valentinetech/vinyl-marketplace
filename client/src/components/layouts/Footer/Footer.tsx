import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: flex-start;
`;

const Footer = () => {
  return (
    <>
      <SectionContainer>
        <h2>Footer</h2>
      </SectionContainer>
    </>
  );
};

export default Footer;
