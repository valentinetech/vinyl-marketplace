import { useState, useCallback } from 'react';

const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setIsOpen((isOpen) => !isOpen), []);
  return [isOpen, toggle];
};

export default useToggle;
