// import { Nav, NavContainer } from './Header.styles';
import styled from 'styled-components';
import { Button } from '../../elements/Button/Button';
import logo from '../../../assets/images/logo.png';
import { theme } from '../../../styles/theme';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { menuRoutes } from '../../../constants/menuRoutes';
interface HeaderProps {}

export const Nav = styled.nav`
  height: 80px;
  background-color: ${theme.colors.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 20;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 10;
  padding: 0 50px;
  max-width: 1100px;
  width: 100%;
`;

export const LogoLink = styled(LinkR)`
  justify-content: flex-start;
`;
export const Logo = styled.img`
  width: 175px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media ${theme.device.tabletMax} {
    display: block;
    visibility: visible;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 16px;
    cursor: pointer;
    color: ${theme.colors.brand};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media ${theme.device.tabletMax} {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  /* margin-top: 50px;
  justify-content: center;
  align-items: center; */
`;

export const NavLink = styled(LinkS)`
  color: ${theme.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 16px;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid ${theme.colors.brand};
  }

  &:hover {
    color: ${theme.colors.brand};
  }
`;

export const NavButton = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;

  @media ${theme.device.tabletMax} {
    display: none;
  } ;
`;
export const NavButtonMobile = styled(LinkR)`
  display: none;
  align-items: center;
  text-decoration: none;

  @media ${theme.device.tabletMin} {
    display: none;
  } ;
`;

export const NavSignUp = styled(LinkR)`
  display: flex;
  align-items: flex-end;
  color: ${theme.colors.brandSecondary};
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.brand};
  }

  @media ${theme.device.signupMax} {
    display: none;
  } ;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = (...props: any) => {
  return (
    <Nav>
      <NavContainer>
        <LogoLink to='/'>
          <Logo src={logo} alt='logo' />
        </LogoLink>
        <MobileIcon onClick={handleClick}>
          <FaBars size={32} />
        </MobileIcon>
        <NavMenu>
          {menuRoutes.map((item, index) => {
            return (
              <NavItem key={index}>
                <NavLink key={index} to={item.route}>
                  {item.title}
                </NavLink>
              </NavItem>
            );
          })}
        </NavMenu>
        <NavButtonMobile to='/'>
          <Button variant='primary'>Login</Button>
        </NavButtonMobile>
        <LoginContainer>
          <NavSignUp to='/'>Sign Up</NavSignUp>
          <NavButton to='/'>
            <Button variant='secondary'>Login</Button>
          </NavButton>
        </LoginContainer>
      </NavContainer>
    </Nav>
  );
};
export default Header;

function handleClick() {}
