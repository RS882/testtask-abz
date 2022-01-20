import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/Logo.svg';
import BurgerMenu from './burgerMenu/BurgerMenu';
import MenuContainer from './Menu/Menu';
import { useMediaQuery } from './../Hook/useMediaQuery';

const Header = (props) => {

	const [activeClass, setActiveClass] = useState('');
	const onClickBurgerBtn = () => setActiveClass('_active');
	const onClickNotMenu = () => setActiveClass('_transition');
	const endTransition = () => {
		if (activeClass === '_transition') setActiveClass('');
	};
	const is1024 = (useMediaQuery('(min-width: 1024px)'));
	useEffect(() => {
		if (is1024) setActiveClass('');
	})
	return (
		<header className="header">
			<div onTransitionEnd={endTransition} className="header__container container">
				<div className={`header__body ${activeClass}`}>
					<div className="header__logo logo">
						<NavLink to={'/login'} className="logo__box">
							<img src={logo} alt='logo' />
						</NavLink>
					</div>
					<MenuContainer isBurgerMenu={activeClass === '_active' || false} />
				</div>
				<div className={`header__lock ${activeClass}`} onClick={onClickNotMenu}></div>
				<BurgerMenu onClickBurgerBtn={onClickBurgerBtn} />
			</div>
		</header>
	)
}

export default Header;