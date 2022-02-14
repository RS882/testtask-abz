
import Logo from '../logo/logo';

import BurgerButton from './burgerButton/burgerButton';

const BurgerMenu = (props) => {
	//бургер меню
	return (
		<div className={`${props.addClass} burger`} >
			<Logo boxClass={"burger__logo"} />
			<BurgerButton onClickBurgerBtn={props.onClickBurgerBtn} btnClass={"burger__btn"} />
		</div>


	)
}
export default BurgerMenu;