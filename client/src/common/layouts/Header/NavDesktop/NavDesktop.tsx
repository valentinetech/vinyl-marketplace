import logo from 'assets/logo.png';
import { FaBars } from 'react-icons/fa';

import Button from 'common/components/Button';
import Search from 'common/components/Search';
import { menuRoutes, btnRoutes } from 'common/layouts/Header/routes';

import { animateScroll } from 'react-scroll';
import {
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
} from './NavDesktop.styles';
import Avatar from 'common/components/Avatar';

interface NavDesktopProps {
  toggleMenu: () => void;
  isAuthorized: boolean;
}

const NavDesktop = ({ toggleMenu, isAuthorized }: NavDesktopProps) => {
  const toggleHome = () => {
    animateScroll.scrollToTop({ duration: 500 });
  };
  return (
    <NavContainer>
      <Nav>
        <LogoLink to='/' onClick={toggleHome}>
          <Logo src={logo} alt='logo' />
        </LogoLink>
        <MobileIcon onClick={toggleMenu} aria-label='Open / Close navigation menu'>
          <FaBars size={32} />
        </MobileIcon>
        {/* <Search></Search> */}
        <Menu>
          {menuRoutes.map((item) => {
            return (
              <MenuItem
                key={item.title}
                to={item.route}
                smooth={item.smooth}
                duration={item.duration}
                offset={item.offset}>
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>
        {isAuthorized ? (
          <Avatar />
        ) : (
          <AuthContainer>
            <RegisterButton to={btnRoutes.register.route}>{btnRoutes.register.title}</RegisterButton>
            <LoginButtonContainer to={btnRoutes.login.route}>
              <Button variant='secondary'>{btnRoutes.login.title}</Button>
            </LoginButtonContainer>
          </AuthContainer>
        )}
      </Nav>
    </NavContainer>
  );
};

export default NavDesktop;
