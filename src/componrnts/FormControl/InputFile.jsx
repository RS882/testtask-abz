
const InputFile = ({ input, meta, helperText, ...props }) => {

	return (
		<div className="form__file">
			<input {...input} {...props} />
			{helperText}
		</div>
	)
}

export default InputFile;