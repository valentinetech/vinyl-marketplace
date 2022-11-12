import { useState, useEffect } from 'react';

const useLocalStorageUserId = (initialState: string = ''): [string] => {
	const [userId, setUserId] = useState<string>(initialState);

	useEffect(() => {
		const userInfo = localStorage.getItem('userInfo') || '';
		const userParsed = userInfo.length > 0 ? JSON.parse(userInfo) : '';
		const userIdSelect = userParsed._id;
		if (userIdSelect) {
			setUserId(userIdSelect);
		}
	}, [userId]);

	return [userId];
};

export default useLocalStorageUserId;
