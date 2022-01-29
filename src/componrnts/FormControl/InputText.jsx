
import { useState } from 'react';


const InputText = ({ input, meta, helperText, ...props }) => {

	const [isHover, setIsHover] = useState(false);
	const isActiveTextInput = meta.active;
	const isEneblFille = input.value && !meta.active;
	const hasError = meta.error && meta.touched;
	const isDisebled = props.disabled;

	const colorFrame = {
		active: `#00BDD3`,
		eneblFilled: `#d0cfcf`,
		error: `#CB3D40`,
		disabled: `#bcbcbc`,
		// fileType: `rgba(0isDisebled, 0, 0, 0.87)`,
	};
	const styleVisible = { opacity: 1, visibility: 'visible', };
	const transition = `opacity 0.3s ease 0s, visibility 0.3s ease 0s`;

	let styleInputText = { opacity: 0, visibility: `hidden`, color: colorFrame.eneblFilled, };
	let borderStyle = { border: `1px solid ${colorFrame.eneblFilled}`, };
	let styleHelpText = { opacity: 0, visibility: `hidden`, color: `inherit`, };

	if (isActiveTextInput) {
		styleInputText = { ...styleVisible, color: colorFrame.active };
		borderStyle = { border: `2px solid ${colorFrame.active}`, };
	};

	if (isEneblFille) {
		styleInputText = { ...styleVisible, color: colorFrame.eneblFilled, };
	}
	if (hasError) {
		styleInputText = { ...styleVisible, color: colorFrame.error };
		borderStyle = { border: `2px solid ${colorFrame.error}`, };
		styleHelpText = { ...styleVisible, color: colorFrame.error, };

	};
	if (isDisebled) {
		borderStyle = { border: `1px solid ${colorFrame.disabled}`, };
		styleHelpText = { ...styleHelpText, color: colorFrame.disabled, };
	};

	if (isHover && !hasError) {
		styleHelpText = { ...styleVisible, transition: transition };
	};
	if (isHover && isDisebled) {
		styleHelpText = { ...styleHelpText, color: colorFrame.disabled, transition: transition, };
	};

	return (
		<div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
			<input {...props} {...input} style={borderStyle} />
			<div className="form__label-text" style={styleInputText}>
				<span style={styleInputText} >{props.placeholder}</span>
			</div>
			<div className="form__helper-text">
				{hasError && <span style={styleHelpText}>{meta.error}<br /></span>}
				<span style={styleHelpText}>{helperText}</span>
			</div>
		</div>
	)
}

export default InputText;
