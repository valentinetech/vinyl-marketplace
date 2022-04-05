import styled from 'styled-components';

// interface Props {
//   backgroundColor: any;
// }

export const StyledHeader = styled.header<{ bg: string }>`
  background-color: ${({ theme }) => theme.colors.header};
  height: 100px;

  &:hover {
    background-color: aqua;
  }
`;
