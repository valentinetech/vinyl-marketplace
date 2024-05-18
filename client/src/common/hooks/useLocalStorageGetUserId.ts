import { useEffect, useState } from 'react';

const useLocalStorageGetUserId = () => {
	const [userId, setUserId] = useState<string>('');

	useEffect(() => {
		const userId: string = localStorage.getItem('userId') ?? '';
		const userParsed: string = userId.length > 0 ? userId : '';
		if (userParsed) {
			setUserId(userParsed);
		}
	}, [userId]);

	return userId;
};

export default useLocalStorageGetUserId;
