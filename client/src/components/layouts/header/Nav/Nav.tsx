import Button from 'components/elements/Button';
import logo from 'assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import { menuRoutes } from 'components/layouts/data/menuRoutes';
import { btnRoutes } from 'components/layouts/data/buttonRoutes';
import { animateScroll } from 'react-scroll';
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

const Nav = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const toggleHome = () => {
    animateScroll.scrollToTop({ duration: 500 });
  };

  return (
    <Navigation>
      <NavContainer>
        <LogoLink to='/' onClick={toggleHome}>
          <Logo src={logo} alt='logo' />
        </LogoLink>
        <MobileIcon onClick={toggleMenu} aria-label='Open / Close navigation menu'>
          <FaBars size={32} />
        </MobileIcon>
        <NavMenu>
          {menuRoutes.map((item) => {
            return (
              <NavItem key={item.title}>
                <NavLink
                  key={item.title}
                  to={item.route}
                  smooth={item.smooth}
                  duration={item.duration}
                  offset={item.offset}>
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
