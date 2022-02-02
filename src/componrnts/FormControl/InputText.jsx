
import { useState } from 'react';
import HelperText from './helperText';


const InputText = ({ input, meta, helperText, ...props }) => {

	const [isHover, setIsHover] = useState(false);
	const hasError = meta.error && meta.touched;

	const colorFrame = {
		active: `#00BDD3`,
		enebl: `#d0cfcf`,
		error: `#CB3D40`,
		disabled: `#bcbcbc`,
		eneblFilled: `#7E7E7E`,
	};

	let borderColor = [];
	let textInputStyle = [, 0, `hidden`];
	let textHelperStyle = textInputStyle;


	const changeBorderStyle = (color = colorFrame.enebl, width = 1,) => ({ border: `${width}px solid ${color}`, });
	const changeTextStyle = (color = colorFrame.eneblFilled, opacity = 1, visibility = 'visible',) =>
		({ color: color, opacity: opacity, visibility: visibility, });

	if (meta.active) {
		const color = colorFrame.active;
		borderColor = [color, 2];
		textInputStyle = [color];
	};
	if (input.value && !meta.active) textInputStyle = [colorFrame.eneblFilled];
	if (hasError) {
		const color = colorFrame.error;
		borderColor = [color, 2];
		textInputStyle = textHelperStyle = [color];
	};
	if (props.disabled) borderColor = textHelperStyle = [colorFrame.disabled];
	if (isHover && !hasError) textHelperStyle = [`inherit`];

	const borderStyle = { ...changeBorderStyle(...borderColor) };
	const styleInputText = { ...changeTextStyle(...textInputStyle) };
	const styleHelpText = { ...changeTextStyle(...textHelperStyle) };

	return (
		<div >
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
