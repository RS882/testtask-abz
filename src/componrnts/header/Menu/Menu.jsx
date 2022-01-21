
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addVisitedLink } from '../../redux/headerReducer';

const Menu = (props) => {
	const creatMenuItems = (menuItems, visited) => menuItems.map((el, i) => {
		const idItem = el.toLowerCase().split('').map(e => (e === ' ') ? `_` : e).join('');
		return (
			<li className="menu__item" onClick={props.onClickItem} key={i} id={idItem}>
				<NavLink to={'/'}
					style={{ color: visited.includes(idItem) && `#00BDD3`, }} >
					{el}
				</NavLink>
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

//=========================================================================
const MenuContainer = (props) => {
	const visitedLinkId = useSelector((state) => state.header.visitedLinkId);
	const dispatch = useDispatch();

	const pcMenu = ['About me', 'Relationships', 'Requirements', 'Users', 'About me', 'Sign Up'];
	const burgerMenu = [...pcMenu.filter(el => el !== 'Requirements'),
		'Terms and Conditions', 'How it works', 'Partnership', 'Help',
		'Level testimonial', 'Contact us', 'Articles', 'Our news', 'Testimonials',
		'Licenses', 'Privacy Policy'];

	const cutArray = (arr, n = 0) => arr.reduce((res, el, i, ar) => {
		if (!n) return ar;
		if (i === 0 || i % n === 0) res.push([]);
		res[res.length - 1].push(el);
		return res;
	}, []);

	const menuItems = props.isBurgerMenu ? cutArray(burgerMenu, 5) : pcMenu;

	const onClickItem = (e) => dispatch(addVisitedLink(e.currentTarget.id));

	return <Menu menuItems={menuItems}
		onClickItem={onClickItem}
		visitedLinkId={visitedLinkId}
		isBurgerMenu={props.isBurgerMenu} />
}


export default MenuContainer;