import AuthButtons from 'features/Auth/AuthButtons';
import Menu from '../Menu/Menu';
import logo from 'assets/logo.png';

import { Nav, LogoLink, Logo, NavIcon, CloseIcon, MenuContainer } from './NavMobile.styles';

interface NavProps {
	toggleMenu: () => void;
	isOpen: boolean;
}

const NavMobile = ({ isOpen, toggleMenu }: NavProps) => {
	return (
		<Nav isOpen={isOpen} onClick={toggleMenu}>
			<LogoLink to="/#">
				<Logo src={logo} alt="logo" />
			</LogoLink>
			<NavIcon onClick={toggleMenu} aria-label="Open or Close navigation">
				<CloseIcon size={32} onClick={toggleMenu} />
			</NavIcon>
			<MenuContainer>
				<Menu variant="mobile" />
				<AuthButtons variant="mobile" />
			</MenuContainer>
		</Nav>
	);
};

export default NavMobile;
