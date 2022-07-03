import styled from 'styled-components';
import { theme } from 'styles/theme';

export { SectionContainer, SectionName, AboutText };

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: flex-start;
  margin-top: 50px;
`;

const SectionName = styled.h2`
  color: ${theme.colors.brandSecondary};

  @media ${theme.device.default} {
    display: flex;
    justify-content: center;
  }
`;

const AboutText = styled.div`
  font-size: 22px;
  font-style: italic;
  margin-top: 50px;
  text-align: justify;
  width: fit-content;

  @media ${theme.device.default} {
    margin: 50px 20px;
  }
`;
