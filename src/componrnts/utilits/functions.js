// резрезаем массив на равные части. 
//результат -массив массивов с n- количеством элементов в каждом
//(в посленем - кол. может быть меньше n)
export const cutArray = (arr, n = 0) => arr.reduce((res, el, i, ar) => {
	if (!n) return ar;
	if (i === 0 || i % n === 0) res.push([]);
	res[res.length - 1].push(el);
	return res;
}, []);

//-----------------------------------------------------------
//обрезаем строку на величину num, довавляя в конце строки endOfStr
export const cutString = (str, num = 10, endOfStr = '...') => {
	if (str.length > num) return str.substr(0, num) + endOfStr;
	return str;
};

//---------------------------------------------------------------
// определяем размер изображения в файле file и передаем его в функцию setFunc
export const readImageSize = (file, setFunc) => {
	const reader = new FileReader();
	if (file) {
		reader.readAsDataURL(file);//читаем содержимое file
		reader.onload = () => {
			const image = new Image();//создаем объект img
			image.src = reader.result;
			image.onload = () => {
				setFunc({ width: image.width, height: image.height, });
			};
		};
	} else { setFunc({}); }
}
//------------------------------------------------------------
//преобразуем шаблон пока тел номера из +3801111111 в +38 (011) 111 11 11
export const showPhoneNum = phoneNum => {
	const res = phoneNum.split('');
	// изменем массив arr : на позиции указанные в массиве arrModPos вставляем строку modElem
	const arrMod = (arr, arrModPos, modElem = ' ') => arrModPos.forEach(e => arr.splice(e, 0, modElem));
	arrMod(res, [3, 7, 11, 14]);
	arrMod(res, [4], '(');
	arrMod(res, [8], ')');
	return res.join('');
}

