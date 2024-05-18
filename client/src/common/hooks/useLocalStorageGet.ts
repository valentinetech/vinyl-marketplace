import { useEffect, useState } from 'react';

const useLocalStorageGet = (itemName: string): string => {
	const [itemCurrent, setItemCurrent] = useState<string>('');

	useEffect(() => {
		const getItem: string = localStorage.getItem(itemName) ?? '';
		const getItemParsed: string = getItem.length > 0 ? JSON.parse(getItem) : '';
		const getItemSelect: string = getItemParsed;
		if (getItemSelect) {
			setItemCurrent(getItemSelect);
		}
	}, [itemCurrent, itemName]);

	return itemCurrent;
};

export default useLocalStorageGet;
