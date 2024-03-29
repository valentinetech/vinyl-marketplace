import { useState, useEffect } from 'react';

interface useLocalStorageGetProps {
	itemName: string;
}

const useLocalStorageGet = ({ itemName }: useLocalStorageGetProps): string => {
	const [itemCurrent, setItemCurrent] = useState<string>('');

	useEffect(() => {
		const getItem = localStorage.getItem(itemName) || '';
		const getItemParsed = getItem.length > 0 ? JSON.parse(getItem) : '';
		const getItemSelect = getItemParsed;
		if (getItemSelect) {
			setItemCurrent(getItemSelect);
		}
	}, [itemCurrent, itemName]);

	return itemCurrent;
};

export default useLocalStorageGet;
