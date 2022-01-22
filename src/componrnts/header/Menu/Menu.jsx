
import { NavLink } from 'react-router-dom';


const Menu = (props) => {

	const creatMenuItems = (menuItems, visited) => menuItems.map((el, i) => {
		const idItem = el.toLowerCase().split('').map(e => (e === ' ') ? `_` : e).join('');
		return (
			<li className="menu__item" onClick={props.onClickItem} key={i} id={idItem}>
				<NavLink to={'/login'}
					style={{ color: visited.includes(idItem) && `#00BDD3`, }}
				>{el}</NavLink>
			</li>
		)
	});


	const menuElements = props.isBurgerMenu ?
		(props.menuItems.map((elem, i) =>
			<ul className='menu__sublist' key={i}>{creatMenuItems(elem, props.visitedLinkId)}</ul>)
		) : creatMenuItems(props.menuItems, props.visitedLinkId)

	return (
		<div className="header__menu menu">
			<ul className="menu__list">
				{menuElements}
			</ul>
		</div>
	)
}

export default Menu;
