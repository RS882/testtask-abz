import burgerMenu from './../../../../assets/img/Menu.svg';

const BurgerButton = (props) => {

	return (
		<button type="button" onClick={props.onClickBurgerBtn} className={props.btnClass}>
			<div >
				<img src={burgerMenu} alt='Menu burger' />
			</div>
		</button>
	)
}

export default BurgerButton;