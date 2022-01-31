
import HelperText from "./helperText";
import { useState } from 'react';
import { useEffect } from 'react';

const InputFile = ({ input, meta, helperText, restartFile, ...props }) => {

	const [isHover, setIsHover] = useState(false);
	const [touchedLabel, setTouchedLabel] = useState(false);

	useEffect(() => {
		restartFile && setTouchedLabel(!restartFile)
	}, [restartFile])


	const hasError = meta.error && touchedLabel;

	const color = {
		main: `rgba(0, 0, 0, 0.87)`,
		second: `#7E7E7E`,
		disable: `#D0CFCF`,
		error: `#CB3D40`,
	};


	let uploadColor = [color.main];
	let fileNameColor = [color.second, color.disable, , `none`];
	let helpColor = [color.main, 'none', 'none', 'none',];
	let styleVisible = { opacity: 0, visibility: 'hidden', };


	const changeColor = (color, borderColor = color, width = 1, borderLeft = `${width}px solid ${borderColor}`,) => ({
		color: color,
		borderTop: `${width}px solid ${borderColor}`,
		borderBottom: `${width}px solid ${borderColor}`,
		borderRight: `${width}px solid ${borderColor}`,
		borderLeft: borderLeft,
	});


	if (isHover) {
		styleVisible = { opacity: 1, visibility: 'visible', };
		fileNameColor = [color.second, color.main, , `none`,];
	};

	if (input.value) {
		fileNameColor = [color.main, color.disable, , `none`,];
	};

	if (input.value && isHover) {
		fileNameColor = [color.main, , , `none`,];
	};

	if (props.disabled) {
		fileNameColor = [color.disable, , , `none`,];
		uploadColor = [color.disable,];
	};

	if (hasError) {
		fileNameColor = [color.main, color.error, 2, `none`,];
		uploadColor = [color.main, color.error, 2];
		helpColor = [color.error, 'none', 'none', 'none',];
		styleVisible = { opacity: 1, visibility: 'visible', };
	};

	const styleUpload = changeColor(...uploadColor);
	const styleFileName = changeColor(...fileNameColor);
	const styleHelpText = { ...changeColor(...helpColor), ...styleVisible };

	return (<>
		<label className="form__file form__input" tabIndex="0"
			onBlur={() => setTouchedLabel(true)}>
			<div className="form__file-box" onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}>
				<div style={styleUpload} className="form__file-label">
					Upload
					<input {...input} {...props} />
				</div>
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