
const Modal = (Component) => (props) => {


	return (
		<div className="modal" style={{ backgroundColor: `${props.bgColor || 'rgba(0, 0, 0, 0.5)'}`, }}>

			<Component {...props} />

		</div>
	)
}

export default Modal;