import { theme } from 'common/styles/theme';
import { FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

interface isOpenProp {
	isOpen: boolean;
}

export { CloseIcon, Logo, LogoLink, MenuContainer, Nav, NavContainer, NavIcon };

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

const Nav = styled.aside<isOpenProp>`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color: ${theme.colors.body};
	display: grid;
	align-items: center;
	left: 0;
	transition: 0.3s ease-in-out;
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

const CloseIcon = styled(FaTimes)`
	color: #fff;
`;
const NavIcon = styled.div`
	position: absolute;
	top: 20px;
	right: 32px;
	cursor: pointer;
	outline: none;
`;

const MenuContainer = styled.div`
	color: #fff;
`;

const LogoLink = styled(HashLink)`
	position: absolute;
	top: 20px;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	text-align: center;
	cursor: pointer;
	outline: none;
`;
const Logo = styled.img`
	width: 200px;
`;
