import { useState } from 'react';
import HelperText from './helperText';

const InputText = ({ input, meta, helperText, ...props }) => {
	// тестовый инпут
	// триггер наведения мыши
	const [isHover, setIsHover] = useState(false);
	// триггер наличие ошибки при покидании поля
	const hasError = meta.error && meta.touched;
	//цвета стилей
	const colorFrame = {
		// в фокусе
		active: `#00BDD3`,
		// не в фокусе
		enebl: `#d0cfcf`,
		// ошибка
		error: `#CB3D40`,
		//задизейблено		
		disabled: `#bcbcbc`,
		// не в фокусе и заполнено
		eneblFilled: `#7E7E7E`,
	};
	//начальные стили 
	let borderColor = [];
	let textInputStyle = [, 0, `hidden`];
	let textHelperStyle = textInputStyle;
	// меняем стиль границы
	const changeBorderStyle = (color = colorFrame.enebl, width = 1,) => ({ border: `${width}px solid ${color}`, });
	// меняем стиль текста
	const changeTextStyle = (color = colorFrame.eneblFilled, opacity = 1, visibility = 'visible',) =>
		({ color: color, opacity: opacity, visibility: visibility, });
	// триггер фокуса
	if (meta.active) {
		const color = colorFrame.active;
		borderColor = [color, 2];
		textInputStyle = [color];
	};
	// тиггер не в фокусе и заполнено
	if (input.value && !meta.active) textInputStyle = [colorFrame.eneblFilled];
	// тиггер ошибки
	if (hasError) {
		const color = colorFrame.error;
		borderColor = [color, 2];
		textInputStyle = textHelperStyle = [color];
	};
	// тиггер диззейбла
	if (props.disabled) borderColor = textHelperStyle = [colorFrame.disabled];
	// тиггер наведения и нет ошибки
	if (isHover && !hasError) textHelperStyle = [`inherit`];
	// стиль границы
	const borderStyle = { ...changeBorderStyle(...borderColor) };
	// стиль  текста
	const styleInputText = { ...changeTextStyle(...textInputStyle) };
	// стиль help текста 
	const styleHelpText = { ...changeTextStyle(...textHelperStyle) };
	return (
		<div >
			{/* обработчити для получения hover  onMouseEnter и onMouseLeave*/}
			<input onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
				{...props} {...input} style={borderStyle} />
			<div className="form__label-text" style={styleInputText}>
				<span style={styleInputText} >{props.placeholder}</span>
			</div>
			<HelperText
				hasError={hasError}
				styleHelpText={styleHelpText}
				errorText={meta.error}
				helperText={helperText}
			/>
		</div>
	)
}

export default InputText;
