import { theme } from 'common/styles/theme';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export { MenuMobileContainer, MenuItemMobile, MenuDesktopContainer, MenuItemDesktop };

const MenuMobileContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media ${theme.device.tabletMax} {
    grid-template-rows: repeat(6, 60px);
  }
`;

const MenuItemMobile = styled(HashLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  font-size: 18px;

  &:active {
    color: ${theme.colors.brand};
    transition: 0.2s ease-in-out;
  }
`;

const MenuDesktopContainer = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media ${theme.device.tabletMax} {
    display: none;
  }
`;

const MenuItemDesktop = styled(HashLink)`
  color: ${theme.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 16px;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.brand};
    border-bottom: 3px solid ${theme.colors.brand};
  }
`;
