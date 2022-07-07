import { menuRoutes, btnRoutes } from 'common/layouts/Header/routes';
import logo from 'assets/logo.png';
import Button from 'common/components/Button';
import Avatar from 'common/components/Avatar';
import {
  Nav,
  LogoLink,
  Logo,
  Icon,
  CloseIcon,
  MenuContainer,
  Menu,
  MenuItem,
  RegisterButton,
  LoginButtonContainer,
} from './NavMobile.styles';

interface NavProps {
  toggleMenu: () => void;
  isOpen: boolean;
  isAuthorized: boolean;
}
const NavMobile = ({ isOpen, toggleMenu, isAuthorized }: NavProps) => {
  return (
    <Nav isOpen={isOpen} onClick={toggleMenu}>
      <LogoLink to='/'>
        <Logo src={logo} alt='logo' />
      </LogoLink>
      <Icon onClick={toggleMenu} aria-label='Open or Close navigation'>
        <CloseIcon size={32} />
      </Icon>
      <MenuContainer>
        <Menu>
          {menuRoutes.map((item) => {
            return (
              <MenuItem
                key={item.title}
                to={item.route}
                onClick={toggleMenu}
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
          <>
            <RegisterButton to={btnRoutes.register.route}>{btnRoutes.register.title}</RegisterButton>
            <LoginButtonContainer to={btnRoutes.login.route}>
              <Button>{btnRoutes.login.title}</Button>
            </LoginButtonContainer>
          </>
        )}
      </MenuContainer>
    </Nav>
  );
};

export default NavMobile;
