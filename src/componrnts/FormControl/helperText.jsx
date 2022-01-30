
const HelperText = (props) => {

	return (
		<div className="form__helper-text">
			{props.hasError && <span style={props.styleHelpText}>{props.errorText}<br /></span>}
			<span style={props.styleHelpText}>{props.helperText}</span>
		</div>
	)
}

export default HelperText;