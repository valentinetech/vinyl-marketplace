import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { theme } from 'common/styles/theme';
import { HashLink } from 'react-router-hash-link';

interface isOpenProp {
  isOpen: boolean;
}

export { Nav, LogoLink, Logo, NavIcon, CloseIcon, MenuContainer };

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
