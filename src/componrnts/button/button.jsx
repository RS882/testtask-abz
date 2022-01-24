

const Button = (props) => {

	return (
		<div className="btn">
			<button
				className="btn__btn"
				disabled={props.btnDisabled}
				onClick={props.onClickBtn}
				type={props.btnType}
			>{props.text}</button>
		</div>
	)
}

export default Button;