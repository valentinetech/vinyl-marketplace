import Button from 'components/elements/Button';
import logo from 'assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import { menuRoutes } from 'components/layouts/data/menuRoutes';
import { btnRoutes } from 'components/layouts/data/buttonRoutes';
import {
  Navigation,
  NavContainer,
  LogoLink,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  LoginContainer,
  NavSignUp,
  NavButton,
} from './Nav.styles';

interface NavProps {
  toggleMenu: () => void;
}

const Nav = ({ toggleMenu }: NavProps) => {
  return (
    <Navigation>
      <NavContainer>
        <LogoLink to='/'>
          <Logo src={logo} alt='logo' />
        </LogoLink>
        <MobileIcon onClick={toggleMenu} aria-label='Open / Close navigation menu'>
          <FaBars size={32} />
        </MobileIcon>
        <NavMenu>
          {menuRoutes.map((item) => {
            return (
              <NavItem key={item.title}>
                <NavLink key={item.title} to={item.route}>
                  {item.title}
                </NavLink>
              </NavItem>
            );
          })}
        </NavMenu>
        <LoginContainer>
          <NavSignUp to={btnRoutes.signUp.route}>{btnRoutes.signUp.title}</NavSignUp>
          <NavButton to={btnRoutes.login.route}>
            <Button variant='secondary'>{btnRoutes.login.title}</Button>
          </NavButton>
        </LoginContainer>
      </NavContainer>
    </Navigation>
  );
};

export default Nav;

function handleClick() {}
