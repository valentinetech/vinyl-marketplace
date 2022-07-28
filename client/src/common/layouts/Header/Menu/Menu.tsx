import { useAppSelector } from 'app/store';
import { publicMenu, protectedMenu } from 'config/config';
import { MenuMobileContainer, MenuItemMobile, MenuDesktopContainer, MenuItemDesktop } from './Menu.styles';

interface MenuProps {
  variant: 'desktop' | 'mobile';
  toggleMenu?: () => void;
}

const Menu = ({ variant = 'desktop', toggleMenu }: MenuProps) => {
  const { user } = useAppSelector((state) => state.auth);

  const menuRoutes = user ? protectedMenu : publicMenu;

  const MenuMobile = () => {
    return (
      <MenuMobileContainer>
        {menuRoutes.map((item) => {
          return (
            <MenuItemMobile key={item.title} smooth to={item.route}>
              {item.title}
            </MenuItemMobile>
          );
        })}
      </MenuMobileContainer>
    );
  };

  const MenuDesktop = () => {
    return (
      <MenuDesktopContainer>
        {menuRoutes.map((item) => {
          return (
            <MenuItemDesktop key={item.title} smooth to={item.route}>
              {item.title}
            </MenuItemDesktop>
          );
        })}
      </MenuDesktopContainer>
    );
  };
  return <>{variant === 'desktop' ? <MenuDesktop /> : <MenuMobile />}</>;
};
export default Menu;
