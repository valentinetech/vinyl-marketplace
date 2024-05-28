import logo from 'assets/logo.png';
import AuthButtons from 'features/Auth/AuthButtons';
import { FaBars } from 'react-icons/fa';
import Menu from '../Menu';
import { AvatarContainer, Logo, LogoLink, MobileIcon, Nav, NavContainer } from './NavDesktop.styles';

interface NavProps {
	toggleMenu?: () => void;
}

const NavDesktop = ({ toggleMenu }: NavProps) => {
	return (
		<NavContainer role="navigation" aria-label="desktop navigation">
			<Nav>
				<LogoLink to="/#">
					<Logo src={logo} alt="logo" />
				</LogoLink>
				<MobileIcon onClick={toggleMenu} aria-label="toggle navigation">
					<FaBars size={32} />
				</MobileIcon>
				<Menu variant="desktop" />
				<AvatarContainer>
					<AuthButtons variant="desktop" />
				</AvatarContainer>
			</Nav>
		</NavContainer>
	);
};

export default NavDesktop;
