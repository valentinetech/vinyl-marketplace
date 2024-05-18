import { useEffect, useState } from 'react';

const useLocalStorageGetUserInfo = () => {
	const [userId, setUserId] = useState<string>('');

	useEffect(() => {
		const userInfo = localStorage.getItem('userInfo') ?? '';
		const userParsed = userInfo.length > 0 ? JSON.parse(userInfo) : '';
		const userIdSelect = userParsed._id;
		if (userIdSelect) {
			setUserId(userIdSelect);
		}
	}, [userId]);

	return userId;
};

export default useLocalStorageGetUserInfo;
