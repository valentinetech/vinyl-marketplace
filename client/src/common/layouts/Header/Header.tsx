import useToggle from 'common/hooks/useToggle';
import useScreenSize from '../../hooks/useScreenSize';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Header = () => {
	const [isOpen, toggleMenu] = useToggle();
	const screen = useScreenSize();
	const isMobile = screen.width <= 768;
	return (
		<>{isMobile ? <NavMobile isOpen={isOpen} toggleMenu={toggleMenu} /> : <NavDesktop toggleMenu={toggleMenu} />}</>
	);
};
export default Header;
