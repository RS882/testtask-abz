
const Modal = (Component) => (props) => {

	return (
		<div className="modal">

			<Component {...props} />

		</div>
	)
}

export default Modal;