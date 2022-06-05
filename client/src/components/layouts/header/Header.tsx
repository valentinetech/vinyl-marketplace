import NavMobile from './NavMobile/NavMobile';
import Nav from './Nav/Nav';
import { useState } from 'react';

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
