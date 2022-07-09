// Images & icons
import logo from 'assets/logo.png';
import { FaBars } from 'react-icons/fa';
// Common components
import Button from 'common/components/Button';
import Avatar from 'common/components/Avatar';
// Routes
import { menuRoutes, btnRoutes } from 'common/layouts/Header/routes';
// Styles
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

interface NavDesktopProps {
  toggleMenu: () => void;
  isAuthorized: boolean;
}
const NavDesktop = ({ toggleMenu, isAuthorized }: NavDesktopProps) => {
  return (
    <NavContainer>
      <Nav>
        <LogoLink to='/#'>
          <Logo src={logo} alt='logo' />
        </LogoLink>
        <MobileIcon onClick={toggleMenu} aria-label='Open / Close navigation menu'>
          <FaBars size={32} />
        </MobileIcon>
        <Menu>
          {menuRoutes.map((item) => {
            return (
              <MenuItem key={item.title} smooth to={item.route}>
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
