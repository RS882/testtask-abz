
import Logo from '../logo/logo';
import burgerMenu from './../../../assets/img/Menu.svg';

const BurgerMenu = (props) => {
	return (
		<div className="header__burger burger">
			<Logo boxClass={"burger__logo logo"} linkClass={"logo__box"} />
			<button type="button" onClick={props.onClickBurgerBtn} className="burger__btn">
				<div >
					<img src={burgerMenu} alt='Menu burger' />
				</div>
			</button>
		</div>


	)
}
export default BurgerMenu;