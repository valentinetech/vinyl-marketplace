import logo from 'assets/logo.png';
import AuthButtons from 'features/Auth/AuthButtons';
import Menu from '../Menu/Menu';

import { FaBars } from 'react-icons/fa';
import { MobileIcon } from '../NavDesktop/NavDesktop.styles';
import { CloseIcon, Logo, LogoLink, MenuContainer, Nav, NavContainer, NavIcon } from './NavMobile.styles';

interface NavProps {
	toggleMenu: () => void;
	isOpen: boolean;
}

const NavMobile = ({ isOpen, toggleMenu }: NavProps) => {
	return (
		<NavContainer role="navigation" aria-label="mobile navigation">
			<MobileIcon onClick={toggleMenu} aria-label="toggle navigation">
				<FaBars size={32} />
			</MobileIcon>
			<Nav isOpen={isOpen} onClick={toggleMenu}>
				<LogoLink to="/#">
					<Logo src={logo} alt="logo" />
				</LogoLink>
				<NavIcon onClick={toggleMenu} aria-label="toggle navigation">
					<CloseIcon size={32} onClick={toggleMenu} />
				</NavIcon>
				<MenuContainer>
					<Menu variant="mobile" />
					<AuthButtons variant="mobile" />
				</MenuContainer>
			</Nav>
		</NavContainer>
	);
};

export default NavMobile;
