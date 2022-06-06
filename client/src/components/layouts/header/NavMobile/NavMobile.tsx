import { menuRoutes } from 'components/layouts/data/menuRoutes';
import { btnRoutes } from 'components/layouts/data/buttonRoutes';
import logo from 'assets/images/logo.png';
import Button from 'components/elements/Button';
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
}

const NavMobile = ({ isOpen, toggleMenu }: NavProps) => {
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
          {menuRoutes.map((item, index) => {
            return (
              <Link key={index} to={item.route} onClick={toggleMenu}>
                {item.title}
              </Link>
            );
          })}
        </Menu>
        <NavSignUp to={btnRoutes.signUp.route}>{btnRoutes.signUp.title}</NavSignUp>
        <ButtonContainer to={btnRoutes.login.route}>
          <Button>{btnRoutes.login.title}</Button>
        </ButtonContainer>
      </MenuContainer>
    </Container>
  );
};

export default NavMobile;
