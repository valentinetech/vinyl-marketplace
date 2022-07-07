import styled from 'styled-components';
import { theme } from 'common/styles/theme';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export {
  NavContainer,
  Nav,
  LogoLink,
  Logo,
  MobileIcon,
  Menu,
  MenuItem,
  LoginButtonContainer,
  RegisterButton,
  AuthContainer,
};

const NavContainer = styled.nav`
  height: 80px;
  background-color: ${theme.colors.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 20;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 10;
  padding: 0 50px;
  max-width: 1100px;
  width: 100%;
`;

const LogoLink = styled(LinkR)`
  justify-content: flex-start;
`;
const Logo = styled.img`
  width: 200px;
`;

const MobileIcon = styled.div`
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

const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media ${theme.device.tabletMax} {
    display: none;
  }
`;

const MenuItem = styled(LinkS)`
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

const LoginButtonContainer = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;

  @media ${theme.device.tabletMax} {
    display: none;
  } ;
`;

const RegisterButton = styled(LinkR)`
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

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
`;
