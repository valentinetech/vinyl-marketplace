import NavMobile from './NavMobile/NavMobile';
import Nav from './Nav/Nav';
import { useState } from 'react';

const Header = () => {
  const [isOpen, isOpenSet] = useState(false);

  const toggleMenu = () => {
    isOpenSet(!isOpen);
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
