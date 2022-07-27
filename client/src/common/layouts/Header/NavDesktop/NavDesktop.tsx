import logo from 'assets/logo.png';
import { FaBars } from 'react-icons/fa';
import AuthButtons from 'features/Auth/AuthButtons';
import Menu from '../Menu';
import { NavContainer, Nav, LogoLink, Logo, MobileIcon, AvatarContainer } from './NavDesktop.styles';

interface NavProps {
  toggleMenu?: () => void;
}

const NavDesktop = ({ toggleMenu }: NavProps) => {
  return (
    <NavContainer>
      <Nav>
        <LogoLink to='/#'>
          <Logo src={logo} alt='logo' />
        </LogoLink>
        <MobileIcon onClick={toggleMenu} aria-label='Open / Close navigation menu'>
          <FaBars size={32} />
        </MobileIcon>
        <Menu variant='desktop' />
        <AvatarContainer>
          <AuthButtons variant='desktop' />
        </AvatarContainer>
      </Nav>
    </NavContainer>
  );
};

export default NavDesktop;
