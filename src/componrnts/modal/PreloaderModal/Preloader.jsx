import preloader from './../../../assets/img/Preloader.svg'

const Preloader = (props) => {

	return (
		<div className='modal__preloader preloader' style={props.style}>
			<div className='preloader__wrapper'>
				<img src={preloader} alt="preloader" />
			</div>

		</div>
	)
}

export default Preloader;