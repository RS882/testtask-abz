export const cutArray = (arr, n = 0) => arr.reduce((res, el, i, ar) => {
	if (!n) return ar;
	if (i === 0 || i % n === 0) res.push([]);
	res[res.length - 1].push(el);
	return res;
}, []);

export const cutString = (str, num = 10, endOfStr = '...') => {
	if (str.length > num) return str.substr(0, num) + endOfStr;
	return str;
};