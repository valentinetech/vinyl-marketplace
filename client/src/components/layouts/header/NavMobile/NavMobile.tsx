import { menuRoutes } from '../../../../constants/menuRoutes';
import { btnRoutes } from '../../../../constants/buttonRoutes';
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
import { ReactNode } from 'react';

interface NavMobileProps extends React.MouseEvent<HTMLElement> {
  toggleMenu: any;
  isOpen: [boolean, (isOpen: boolean) => void];
}

const NavMobile = ({ isOpen, toggleMenu }: any) => {
  return (
    //@ts-ignore
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
              <Link key={index} to={item.route}>
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
