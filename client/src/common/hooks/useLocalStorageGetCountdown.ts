import { useState, useEffect } from 'react';

const useLocalStorageGetCountdown = () => {
	const [countdownCurrent, setCountdownCurrent] = useState<string>('');

	useEffect(() => {
		const getCountdown = localStorage.getItem('countdownCurrent') || '';
		const getCountdownParsed = getCountdown.length > 0 ? JSON.parse(getCountdown) : '';
		const getCountdownSelect = getCountdownParsed;
		if (getCountdownSelect) {
			setCountdownCurrent(getCountdownSelect);
		}
	}, [countdownCurrent]);

	return countdownCurrent;
};

export default useLocalStorageGetCountdown;
