import { theme } from 'common/styles/theme';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export { AvatarContainer, Logo, LogoLink, MobileIcon, Nav, NavContainer };

const NavContainer = styled.nav`
	height: 80px;
	background-color: ${theme.colors.body};
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 20;
	border-bottom: 1px solid;
`;

const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	z-index: 10;
	padding: 0 50px;
	max-width: 1100px;
	width: 100%;
`;

const LogoLink = styled(HashLink)`
	justify-content: flex-start;
`;
const Logo = styled.img`
	width: 200px;
`;

const MobileIcon = styled.div`
	display: none;

	@media ${theme.device.tabletMax} {
		display: block;
		visibility: visible;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 16px;
		cursor: pointer;
		color: ${theme.colors.brand};
	}
`;

const AvatarContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	@media ${theme.device.tabletMax} {
		display: none;
	}
`;
