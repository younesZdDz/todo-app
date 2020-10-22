const { useState, useEffect } = require('react');

function useLocalStorageState(key, defaultValue) {
	const [value, setValue] = useState(() => {
		let val;
		try {
			val = JSON.parse(
				window.localStorage.getItem(key) || String(defaultValue)
			);
		} catch (e) {
			val = defaultValue;
		}
		return val;
	});
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
}
export default useLocalStorageState;
