import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/Logo.svg';
import BurgerMenu from './burgerMenu/BurgerMenu';
import MenuContainer from './Menu/MenuContainer';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsBodyLock } from '../redux/modalReducer';



const Header = () => {
	const is1024 = useSelector(state => state.mediaQuery.breakPoints.is1024);
	const isScroll = useSelector(state => state.header.isScroll);
	const [activeClass, setActiveClass] = useState('');
	useEffect(() => { if (is1024) setActiveClass('') }, [is1024]);

	const dispatch = useDispatch();
	const changeIsLock = (is) => dispatch(changeIsBodyLock(is));

	const onClickBurgerBtn = () => {
		setActiveClass('_active');
		changeIsLock(true);
	};
	const onClickNotMenu = () => {
		setActiveClass('_transition')
		changeIsLock(false);
	};
	const endTransition = () => (activeClass === '_transition') && setActiveClass('');

	const styleHeader = { backgroundColor: `rgba(255, 255, 255, ${isScroll ? ` 0.2` : `1`})`, };
	const styleHeaderBurger = { backgroundColor: (activeClass === '_active') ? `#fff` : `inherit` };



	return (
		<header className="header" style={styleHeader}>
			<div onTransitionEnd={endTransition} className="header__container container">
				<div className={`header__body ${activeClass}`} style={styleHeaderBurger}>
					<div className="header__logo logo ">
						<NavLink to={'/login'} className={`logo__box ${activeClass}`}>
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