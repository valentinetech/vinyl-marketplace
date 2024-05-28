import { protectedMenu, publicMenu } from 'routes/routes';
import { MenuDesktopContainer, MenuItemDesktop, MenuItemMobile, MenuMobileContainer } from './Menu.styles';

interface MenuProps {
	variant: 'desktop' | 'mobile';
}

const Menu = ({ variant = 'desktop' }: MenuProps) => {
	const userToken = sessionStorage.getItem('userToken');
	const menuRoutes = userToken ? protectedMenu : publicMenu;

	const MenuMobile = () => {
		return (
			<MenuMobileContainer role="menu" data-testid="mobile">
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
			<MenuDesktopContainer role="menu" data-testid="desktop">
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
