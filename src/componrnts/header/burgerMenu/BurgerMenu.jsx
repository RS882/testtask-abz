import { NavLink } from 'react-router-dom';
import logo from './../../../assets/img/Logo.svg';
import burgerMenu from './../../../assets/img/Menu.svg';

const BurgerMenu = (props) => {
	return (
		<div className="header__burger burger">
			<div className="burger__logo logo">
				<NavLink to={'/login'} className="logo__box">
					<img src={logo} alt='logo' />
				</NavLink>
			</div>
			<button type="button" onClick={props.onClickBurgerBtn} className="burger__btn">
				<div className="burger__btn">
					<img src={burgerMenu} alt='Menu burger' />
				</div>
			</button>
		</div>


	)
}
export default BurgerMenu;