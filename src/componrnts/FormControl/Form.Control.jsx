

const FormControl = ({ input, meta, helperText, ...props }) => {

	// console.log(meta.error);
	const isActiveTextInput = meta.active && input.type === `text`;
	const isEneblFille = input.value && !meta.active && input.type === `text`;
	const hasError = meta.error && meta.touched && input.type === `text`;
	const isDisebled = props.disabled;
	const colorFrame = {
		active: `#00BDD3`,
		eneblFilled: `#d0cfcf`,
		error: `#CB3D40`,
		disabled: `#bcbcbc`,
		fileType: `rgba(0isDisebled, 0, 0, 0.87)`,
	};
	const styleVisible = { opacity: 1, visibility: 'visible', };
	let styleInputText = { opacity: 0, visibility: `hidden`, color: colorFrame.eneblFilled, };
	let borderStyle = { border: `1px solid ${colorFrame.eneblFilled}`, };
	let styleHelpText = { opacity: 0, visibility: `hidden`, color: `inherit`, };

	if (isActiveTextInput) {
		styleInputText = { ...styleVisible, color: colorFrame.active };
		borderStyle = { border: `2px solid ${colorFrame.active}`, };
	};

	if (isEneblFille) {
		styleInputText = { ...styleVisible, color: colorFrame.eneblFilled };
	}
	if (hasError) {
		styleInputText = { ...styleVisible, color: colorFrame.error };
		borderStyle = { border: `2px solid ${colorFrame.error}`, };
		styleHelpText = { ...styleVisible, color: colorFrame.error, };

	};
	if (isDisebled) {
		borderStyle = { border: `1px solid ${colorFrame.disabled}`, };
		styleHelpText = { color: colorFrame.disabled, };
	};


	const activeTextInput = (
		<div className="_text-input-style" style={styleInputText}>
			<span style={styleInputText} >{props.placeholder}</span>
		</div>
	);
	const helperTextElem = (
		<div className="_helper-text">
			{hasError && <span style={styleHelpText}>{meta.error}<br /></span>}
			<span style={styleHelpText}>{helperText}</span>
		</div>
	);

	return (
		<>
			<input {...props} {...input}
				style={borderStyle}
			/>
			{activeTextInput}
			{helperTextElem}

		</>
	)
}

export const Input = (props) => <FormControl {...props} />

// const FormControl = ({ input, meta, FormType, ...props }) => {
// 	if (props.onFocus) input.onFocus = props.onFocus;
// 	if (props.onBlur) input.onBlur = props.onBlur;
// 	if (props.onChange) input.onChange = props.onChange;
// 	const hasError = meta.error && meta.touched;
// 	return (
// 		<div className={s.formBox}>
// 			<div >
// 				<FormType {...props} {...input} style={{ border: hasError && '2px solid red' }} />
// 			</div>
// 			<div className={s.error}>
// 				{hasError && <span>{meta.error}</span>}
// 			</div>
// 		</div>
// 	)
// }

// export const Textarea = (props) => <FormControl {...props} FormType="textarea" />

// export const Input = (props) => <FormControl {...props} FormType="input" />