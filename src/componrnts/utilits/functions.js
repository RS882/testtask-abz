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
export const cutTextWithDot = (text, is768, is1024, cutFromDot = true) => {
	const dotPos = text.indexOf('.') + 1;
	let text768;
	if (cutFromDot) {
		text768 = (dotPos && dotPos < 117) ? cutString(text, dotPos, '') :
			cutString(text, 120);
	} else {
		text768 = cutString(text, 315);
	}
	const textMod = !is768 ? text768 : cutString(text, 365);
	return !is1024 ? textMod : cutString(text, 860);
};

