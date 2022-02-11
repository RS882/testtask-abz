import { useEffect, useState } from 'react';
import BurgerMenu from './burgerMenu/BurgerMenu';
import MenuContainer from './Menu/MenuContainer';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsBodyLock } from '../redux/modalReducer';
import Logo from './logo/logo';



const Header = () => {
	const is1024 = useSelector(state => state.mediaQuery.breakPoints.is1024);
	const isScroll = useSelector(state => state.header.isScroll);
	const [activeClass, setActiveClass] = useState('');
	const disptch = useDispatch();
	useEffect(() => {
		if (is1024) {
			setActiveClass('')
			disptch(changeIsBodyLock(false))
		}
	}, [is1024]);

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
					<Logo boxClass={"header__logo"} linkClass={activeClass} />
					<MenuContainer addClass={"header__menu"} isBurgerMenu={activeClass === '_active' || false} />
				</div>
				<div className={`header__lock ${activeClass}`} onClick={onClickNotMenu}></div>
				<BurgerMenu addClass={"header__burger"} onClickBurgerBtn={onClickBurgerBtn} />
			</div>
		</header>
	)
}

export default Header;