import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { theme } from '../../../../styles/theme';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

interface isOpenProp {
  isOpen: boolean;
}

export const Container = styled.aside<isOpenProp>`
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

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 32px;
  cursor: pointer;
  outline: none;
`;

export const MenuContainer = styled.div`
  color: #fff;
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media ${theme.device.tabletMax} {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const Link = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: ${theme.colors.brand};
    transition: 0.2s ease-in-out;
  }
`;

export const ButtonContainer = styled(LinkR)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const LogoLink = styled(LinkR)`
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
export const Logo = styled.img`
  width: 200px;
`;

export const NavSignUp = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  font-size: 18px;
  color: ${theme.colors.brandSecondary};
  text-decoration: none;
  margin-bottom: 20px;

  &:hover {
    color: ${theme.colors.brand};
  }
`;
