import NavMobile from './NavMobile/NavMobile';
import Nav from './Nav/Nav';
import react, { useState } from 'react';

// interface HeaderProps extends React.MouseEvent<HTMLElement> {
//   isOpen: 'isOpen';
//   toggleMenu: () => void;
// }

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavMobile isOpen={isOpen} toggleMenu={toggleMenu} />
      <Nav toggleMenu={toggleMenu} />
    </>
  );
};
export default Header;

// Header only Nav + Mobile Nav
