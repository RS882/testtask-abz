
const Modal = (Component) => (bgColor, ...props) => {

	const bgC = bgColor.bgColor || 'rgba(0, 0, 0, 0.5)'

	return (
		<div className="modal" style={{ backgroundColor: `${bgC}`, }}>

			<Component {...props} />

		</div>
	)
}

export default Modal;