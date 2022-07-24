import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';
import useToggle from 'common/hooks/useToggle';

const Header = () => {
  const [isOpen, toggleMenu] = useToggle();

  return (
    <>
      <NavMobile isOpen={isOpen} toggleMenu={toggleMenu} />
      <NavDesktop toggleMenu={toggleMenu} />
    </>
  );
};
export default Header;
