import styled from 'styled-components';
import { theme } from 'common/styles/theme';

export { SectionContainer, CopyrightText };

const SectionContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: flex-start;
  margin-top: 50px;
  height: auto;
`;

const CopyrightText = styled.h6`
  margin-top: 50px;
  margin-bottom: 20px;

  @media ${theme.device.default} {
    margin-left: 20px;
    justify-content: center;
  }
`;
