import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavMobile toggleMenu={toggleMenu} isOpen={isOpen} isAuthorized={isAuthorized} />
      <NavDesktop toggleMenu={toggleMenu} isAuthorized={isAuthorized} />
    </>
  );
};
export default Header;
