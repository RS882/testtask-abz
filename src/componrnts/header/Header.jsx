
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/Logo.svg';

import BurgerMenu from './burgerMenu/BurgerMenu';
import MenuContainer from './Menu/Menu';


const Header = (props) => {

	const [activeClass, setActiveClass] = useState('');

	const onClickBurgerBtn = () => {

		setActiveClass('_active');
	}

	const onClickNotMenu = () => {
		setActiveClass('');
	}


	return (
		<header className="header">
			<div className="header__container container">
				<div className={`header__body ${activeClass}`}>
					<div className="header__logo logo">
						<NavLink to={'/login'} className="logo__box">
							<img src={logo} alt='logo' />
						</NavLink>
					</div>
					<MenuContainer />

				</div>
				<div className={`header__lock ${activeClass}`} onClick={onClickNotMenu}></div>

				<BurgerMenu onClickBurgerBtn={onClickBurgerBtn} />

			</div>

		</header>
	)
}

export default Header;