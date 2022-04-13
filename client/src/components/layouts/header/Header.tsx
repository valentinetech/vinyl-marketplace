// import { StyledHeader } from './Header.styles';
import styled from 'styled-components';
import { Button } from '../../elements/Button/Button';
interface HeaderProps {}

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const StyledInput = styled.input`
  display: grid;
  padding: 20px 80px 20px 0;
`;
export const Avatar = styled.img`
  display: grid;
  padding: 20px 80px 20px 0;
`;

const Header = () => (
  <StyledHeader>
    <Button>Login</Button>
    <Button>Login</Button>
    <Button>Login</Button>
  </StyledHeader>
);

export default Header;
