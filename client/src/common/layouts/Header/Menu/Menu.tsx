import { useAppSelector } from 'app/store';
import { publicMenu, protectedMenu } from 'config/routes';
import { MenuMobileContainer, MenuItemMobile, MenuDesktopContainer, MenuItemDesktop } from './Menu.styles';

interface MenuProps {
	variant: 'desktop' | 'mobile';
}

const Menu = ({ variant = 'desktop' }: MenuProps) => {
	const { userToken } = useAppSelector((state) => state.auth);
	const menuRoutes = userToken ? protectedMenu : publicMenu;

	const MenuMobile = () => {
		return (
			<MenuMobileContainer role="menu">
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
			<MenuDesktopContainer role="menu">
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
