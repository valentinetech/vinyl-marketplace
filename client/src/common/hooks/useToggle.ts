import { useState, useCallback } from 'react';

const useToggle = (initialState = false): [boolean, () => void] => {
	const [isActive, setIsActive] = useState<boolean>(initialState);
	const toggle = useCallback((): void => setIsActive((isActive) => !isActive), []);
	return [isActive, toggle];
};

export default useToggle;
