import { useEffect, useState } from 'react';
import BurgerMenu from './burgerMenu/BurgerMenu';
import MenuContainer from './Menu/MenuContainer';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsBodyLock } from '../redux/modalReducer';
import Logo from './logo/logo';



const Header = () => {
	// получаем значение брейкпоинта boolean
	const is1024 = useSelector(state => state.mediaQuery.breakPoints.is1024);
	// получаем значение был ли скролл boolean
	const isScroll = useSelector(state => state.header.isScroll);
	// получаем значение ширины полосы прокрутки
	const scrollWidth = useSelector(state => state.modal.scrollWidth);
	// получаем заняение залочена ли страница
	const isBodyLock = useSelector(state => state.modal.isBodyLock);
	// устанвливаем занчение доп класса
	const [activeClass, setActiveClass] = useState('');
	const disptch = useDispatch();
	useEffect(() => {
		// при изменении ширины окна , убираем доп классы и разблокируем сколл на странице
		// (если было открыто меню-бургер  и изменилась ширина- закрывем  меню-бургер, разлочиваем окно)
		if (is1024) {
			setActiveClass('')
			disptch(changeIsBodyLock(false))
		}
	}, [is1024]);

	const changeIsLock = (is) => disptch(changeIsBodyLock(is));
	// при клике на бургер добавляем класс ( показывем бургер меню) и лочим страницу
	const onClickBurgerBtn = () => {
		setActiveClass('_active');
		changeIsLock(true);
	};
	// при клике за пределами бургер меню- закрываем его и разлочиваем страницу
	const onClickNotMenu = () => {
		setActiveClass('_transition')
		changeIsLock(false);
	};
	// после окончания транзишена - если закрывалось бургер меню- убираем все доп классы. 
	// убираем излишнюю анимацию меню при изменении ширины экрана
	const endTransition = () => (activeClass === '_transition') && setActiveClass('');
	// стиль hеader 
	//console.log(isScroll);

	const styleHeader = {
		//- при наличии прокуртки
		backgroundColor: `rgba(255, 255, 255, ${isScroll ? ` 0.2` : `1`})`,
		// добаляем отступ  при локе страницы( пропадении скролла)
		paddingRight: isBodyLock ? `${scrollWidth}px` : '',
	};
	// стиль - при наличии наличии доп класса (бургер меню)
	const styleHeaderBurger = { backgroundColor: (activeClass === '_active') ? `#fff` : `inherit` };
	return (
		<header className="header" style={styleHeader} >
			<div onTransitionEnd={endTransition} className="header__container container" >
				<div className={`header__body ${activeClass}`} style={styleHeaderBurger}>
					<Logo boxClass={"header__logo"} linkClass={activeClass} />
					{/* при наличии доп класса передаем что меню -бургер */}
					<MenuContainer addClass={"header__menu"} isBurgerMenu={activeClass === '_active' || false} />
				</div>
				<div className={`header__lock ${activeClass}`} onClick={onClickNotMenu}></div>
				<BurgerMenu addClass={"header__burger"} onClickBurgerBtn={onClickBurgerBtn} />
			</div>
		</header>
	)
}

export default Header;