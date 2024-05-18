import { useEffect, useState } from 'react';

const useLocalStorageGetCountdown = () => {
	const [countdownCurrent, setCountdownCurrent] = useState<string>('');

	useEffect(() => {
		const getCountdown: string = localStorage.getItem('countdownCurrent') ?? '';
		const getCountdownParsed: string = getCountdown.length > 0 ? JSON.parse(getCountdown) : '';
		const getCountdownSelect: string = getCountdownParsed;
		if (getCountdownSelect) {
			setCountdownCurrent(getCountdownSelect);
		}
	}, [countdownCurrent]);

	return countdownCurrent;
};

export default useLocalStorageGetCountdown;
