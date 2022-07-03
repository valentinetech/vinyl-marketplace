import styled from 'styled-components';
import { theme } from 'styles/theme';

export { SectionContainer, SectionName, ExploreContainer, LoadMore };

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 50px;

  @media ${theme.device.default} {
    margin: 50px 0px;
    justify-content: center;
  }
`;

const SectionName = styled.h2``;

const ExploreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 32px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  justify-items: center;

  @media ${theme.device.default} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.device.tabletMax} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
