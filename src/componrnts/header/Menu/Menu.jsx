import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {

	return (
		<div className="header__menu menu">
			<ul className="menu__list">
				{props.menuItems.map((el, i) => <li className="menu__item" onClick={props.onClickItem} key={i}>
					<NavLink to={'/login'}>{el}</NavLink></li>)}
			</ul>
		</div>
	)
}

//=========================================================================
const MenuContainer = (props) => {


	const pcMenu = ['About me', 'Relationships', 'Requirements', 'Users', 'Sign Up'];
	const burgerMenu = [...pcMenu.filter(el => el !== 'Requirements'),
		'Terms and Conditions', 'How it works', 'Partnership', 'Help',
		'Level testimonial', 'Contact us', 'Articles', 'Our news', 'Testimonials',
		'Licenses', 'Privacy Policy'];



	const menuItems = props.isBurgerMenu ? burgerMenu : pcMenu;

	const onClickItem = (e) => {
		console.log(e.target.style.color = `#00BDD3`);
	}
	return <Menu menuItems={menuItems} onClickItem={onClickItem} />
}


export default MenuContainer;