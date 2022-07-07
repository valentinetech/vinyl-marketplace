import { menuRoutes, btnRoutes } from 'common/layouts/Header/routes';
import logo from 'assets/logo.png';
import Button from 'common/components/Button';
import {
  Container,
  LogoLink,
  Logo,
  Icon,
  CloseIcon,
  MenuContainer,
  Menu,
  Link,
  NavSignUp,
  ButtonContainer,
} from './NavMobile.styles';

interface NavProps {
  toggleMenu: () => void;
  isOpen: boolean;
  isAuthorized: boolean;
}
const NavMobile = ({ isOpen, toggleMenu, isAuthorized }: NavProps) => {
  return (
    <Container isOpen={isOpen} onClick={toggleMenu}>
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
              <Link
                key={item.title}
                to={item.route}
                onClick={toggleMenu}
                smooth={item.smooth}
                duration={item.duration}
                offset={item.offset}>
                {item.title}
              </Link>
            );
          })}
        </Menu>
        {isAuthorized ? null : (
          <>
            <NavSignUp to={btnRoutes.signUp.route}>{btnRoutes.signUp.title}</NavSignUp>
            <ButtonContainer to={btnRoutes.login.route}>
              <Button>{btnRoutes.login.title}</Button>
            </ButtonContainer>
          </>
        )}
      </MenuContainer>
    </Container>
  );
};

export default NavMobile;
