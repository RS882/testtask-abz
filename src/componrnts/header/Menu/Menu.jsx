import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Menu = (props) => {

	const onClickItem = (e) => {
		console.log(e.target.style.color = `#00BDD3`);

	}

	return (
		<div className="header__menu menu">
			<ul className="menu__list">
				{props.menuItems.map((el, i) => <li className="menu__item" onClick={onClickItem} key={i}>
					<NavLink to={'/login'}>{el}</NavLink></li>)}
			</ul>
		</div>
	)
}


const MenuContainer = (props) => {

	const [menuItems, setMenuItems] =
		useState(['About me', 'Relationships', 'Requirements', 'Users', 'Sign Up']);


	const burgerMEnu = [...menuItems.filter(el => el !== 'Requirements'),
		'Terms and Conditions', 'How it works', 'Partnership', 'Help',
		'Level testimonial', 'Contact us', 'Articles', 'Our news', 'Testimonials',
		'Licenses', 'Privacy Policy'];

	return <Menu menuItems={menuItems} />
}


export default MenuContainer;