
const InputRadio = ({ input, positionName, ...props }) => {

	let checkStyle = { border: `1px solid #D0CFCF` };
	let spanCheckStyle = { opacity: 0 };
	if (input.checked) {
		checkStyle = { border: `1px solid #00BDD3` };
		spanCheckStyle = { opacity: 1 };
	};

	return (
		<div className="radio__label">
			<input {...input} {...props} />
			<div className="radio__radiobtn"
				style={checkStyle}><span style={spanCheckStyle}></span></div>
			<div>{positionName}</div>
		</div>
	)
}

export default InputRadio;