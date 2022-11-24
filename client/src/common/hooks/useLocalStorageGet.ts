import { useState, useEffect } from 'react';

const useLocalStorageGet = () => {
	const [userId, setUserId] = useState<string>('');
	const [countdownCurrent, setCountdownCurrent] = useState<string>('');

	useEffect(() => {
		const userInfo = localStorage.getItem('userInfo') || '';
		const userParsed = userInfo.length > 0 ? JSON.parse(userInfo) : '';
		const userIdSelect = userParsed._id;
		if (userIdSelect) {
			setUserId(userIdSelect);
		}
	}, [userId]);

	useEffect(() => {
		const getCountdown = localStorage.getItem('countdownCurrent') || '';
		const getCountdownParsed = getCountdown.length > 0 ? JSON.parse(getCountdown) : '';
		const getCountdownSelect = getCountdownParsed;
		if (getCountdownSelect) {
			setCountdownCurrent(getCountdownSelect);
		}
	}, []);

	return [userId, countdownCurrent];
};

export default useLocalStorageGet;
