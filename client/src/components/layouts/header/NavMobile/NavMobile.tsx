import { menuRoutes } from '../data/menuRoutes';
import { btnRoutes } from '../data/buttonRoutes';
import { Button } from '../../../elements/Button/Button';
import logo from '../../../../assets/images/logo.png';
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

interface NavMobileProps extends React.MouseEvent<HTMLElement> {
  onClick: () => void;
  toggleMenu: boolean;
  isOpen: [boolean, string, null, undefined, number, (isOpen: boolean) => void];
}

const NavMobile = ({ isOpen, toggleMenu }: NavMobileProps | any) => {
  return (
    <Container isOpen={isOpen} onClick={toggleMenu}>
      <LogoLink to='/'>
        <Logo src={logo} alt='logo' />
      </LogoLink>
      <Icon onClick={toggleMenu}>
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
          <Button variant='primary'>{btnRoutes.login.title}</Button>
        </ButtonContainer>
      </MenuContainer>
    </Container>
  );
};

export default NavMobile;
