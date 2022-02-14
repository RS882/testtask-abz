import HelperText from "./helperText";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';


const InputFile = ({ input, meta, helperText, restartFile, setLoadFile, ...props }) => {
	// файл инпут
	// рефим инпут дял получение данных о файле
	let loadedFile = useRef(null);
	// тирггер нажатия
	const [isHover, setIsHover] = useState(false);
	// триггер посещения поля
	const [touchedLabel, setTouchedLabel] = useState(false);
	useEffect(() => {
		// при рестарте формы
		restartFile && setTouchedLabel(!restartFile)
	}, [restartFile]);
	useEffect(() => {
		// при демонтаже компоненты если файл загружет выгружем его в локальный стайт
		return loadedFile.current && setLoadFile(loadedFile.current.files[0])
	}, [input.value]);
	// тирггер ошибки
	const hasError = meta.error && touchedLabel;
	//цвета стилей
	const color = {
		//основной
		main: `rgba(0, 0, 0, 0.87)`,
		// вспомогательный
		second: `#7E7E7E`,
		// дизейбл
		disable: `#D0CFCF`,
		//ошибка
		error: `#CB3D40`,
	};
	//начальные стили 
	let uploadColor = [color.main];
	let fileNameColor = [color.second, color.disable, , `none`];
	let helpColor = [color.main, 'none', 'none', 'none',];
	let styleVisible = { opacity: 0, visibility: 'hidden', };
	// изменяем стили поля формы
	const changeColor = (color, borderColor = color, width = 1, borderLeft = `${width}px solid ${borderColor}`,) => ({
		color: color,
		borderTop: `${width}px solid ${borderColor}`,
		borderBottom: `${width}px solid ${borderColor}`,
		borderRight: `${width}px solid ${borderColor}`,
		borderLeft: borderLeft,
	});
	// посещение поля
	if (isHover) {
		styleVisible = { opacity: 1, visibility: 'visible', };
		fileNameColor = [color.second, color.main, , `none`,];
	};
	// триггер получения файла
	if (input.value) fileNameColor = [color.main, color.disable, , `none`,];
	//триггер получения файла и наведения
	if (input.value && isHover) fileNameColor = [color.main, , , `none`,];
	// триггер дизейбла
	if (props.disabled) {
		fileNameColor = [color.disable, , , `none`,];
		uploadColor = [color.disable,];
	};
	// триггер ошибки
	if (hasError) {
		fileNameColor = [color.main, color.error, 2, `none`,];
		uploadColor = [color.main, color.error, 2];
		helpColor = [color.error, 'none', 'none', 'none',];
		styleVisible = { opacity: 1, visibility: 'visible', };
	};
	// стиль кнопки upload
	const styleUpload = changeColor(...uploadColor);
	// стиль поля с именим файла
	const styleFileName = changeColor(...fileNameColor);
	// стиль help текста
	const styleHelpText = { ...changeColor(...helpColor), ...styleVisible };
	return (<>
		{/* устанвливаем на поле возможность фокуса  tabIndex + обабока потери фокуса*/}
		<label className="form__file form__input" tabIndex="0"
			onBlur={() => setTouchedLabel(true)}>
			{/* обработчити для получения hover  onMouseEnter и onMouseLeave*/}
			<div className="form__file-box" onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}>
				<div style={styleUpload} className="form__file-label">
					Upload
					<input ref={loadedFile} {...input} {...props} />
				</div>
				{/* убираем фейковый путь в имени файла */}
				<div style={styleFileName} className="form__file-file">{input.value.split(`\\`).reverse()[0] || `Upload your photo`}</div>
			</div>
			<HelperText
				hasError={hasError}
				styleHelpText={styleHelpText}
				errorText={meta.error}
				helperText={helperText} />
		</label>
	</>
	)
}
export default InputFile;