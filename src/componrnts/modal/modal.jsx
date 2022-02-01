
import Button from './../button/button';
const Modal = (props) => {

	return (
		<div className="modal">

			<div className="modal__text-box">
				<div className="modal__wrapper">
					<div className="modal__titile">{props.title}</div>
					<div className="modal__text">{props.text}</div>
					<div className="modal__btn">
						<Button onClickBtn={props.onClickBtn} btnType={'button'} text={props.btnText} />
					</div>
				</div>

			</div>

		</div>
	)
}

export default Modal;