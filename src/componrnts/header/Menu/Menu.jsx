
import MenuItem from './menu_item/MenuItem';


const Menu = (props) => {
	// функуция возвращает пунт меню
	const creatMenuItems = (menuItems, visited) => menuItems.map((el, i) =>
		<MenuItem onClickItem={props.onClickItem} el={el} key={i + el} visited={visited} addClass={'menu__item'} />);

	// от типа меню бургер или нет создаем пункты меню
	const menuElements = props.isBurgerMenu ?
		(props.menuItems.map((elem, i) =>
			<ul className='menu__sublist' key={i + elem}>{creatMenuItems(elem, props.visitedLinkId)}</ul>)
		) : <ul className="menu__list"> {creatMenuItems(props.menuItems, props.visitedLinkId)}</ul>;

	return (
		<div className={`${props.addClass} menu`}>	{menuElements}</div>
	)
}

export default Menu;
