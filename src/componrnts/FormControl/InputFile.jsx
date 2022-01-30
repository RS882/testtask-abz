
import HelperText from "./helperText";
import { useState } from 'react';


const InputFile = ({ input, meta, helperText, ...props }) => {

	const [isHover, setIsHover] = useState(false);
	const [touchedLabel, setTouchedLabel] = useState(false);

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

	if (props.disabled) {
		fileNameColor = [color.disable, , , `none`,];
		uploadColor = [color.disable,];
	};

	if (hasError) {
		fileNameColor = [color.main, color.error, 2, `none`,];
		uploadColor = [color.main, color.error, 2];
		helpColor = [color.error, 'none', 'none', 'none',];
		styleVisible = { opacity: 1, visibility: 'visible', };
	}


	const styleUpload = changeColor(...uploadColor);
	const styleFileName = changeColor(...fileNameColor);
	const styleHelpText = { ...changeColor(...helpColor), ...styleVisible };


	return (<>
		<label className="form__file form__input"
			onClick={() => setTouchedLabel(true)}>

			<div style={styleUpload} className="form__file-label"
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}>
				Upload
				<input {...input} {...props} />
			</div>
			<div style={styleFileName} className="form__file-file">{input.value || `Upload your photo`}</div>

			<HelperText
				hasError={hasError}
				styleHelpText={styleHelpText}
				errorText={meta.error}
				helperText={helperText}
			/>
		</label>
	</>
	)
}

export default InputFile;