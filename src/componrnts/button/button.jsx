

const Button = (props) => {

	return (
		<div className="btn">
			<button
				className="btn__btn"
				disabled={props.btnDisabled}
				type={props.btnType}
			>{props.text}</button>
		</div>
	)
}

export default Button;