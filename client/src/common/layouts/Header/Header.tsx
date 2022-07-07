import NavMobile from './NavMobile';
import Nav from './Nav';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavMobile isOpen={isOpen} toggleMenu={toggleMenu} isAuthorized={isAuthorized} />
      <Nav toggleMenu={toggleMenu} isAuthorized={isAuthorized} />
    </>
  );
};
export default Header;
