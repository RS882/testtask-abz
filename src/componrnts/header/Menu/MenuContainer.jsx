
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addVisitedLink } from '../../redux/headerSlice';
import { cutArray } from '../../utilits/functions';
import Menu from './Menu';




const MenuContainer = (props) => {
	//массив посещенных пунктов меню (id)
	const visitedLinkId = useSelector((state) => state.header.visitedLinkId);
	const dispatch = useDispatch();
	//  пункты меню для РС
	const pcMenu = ['About me', 'Relationships', 'Requirements', 'Users', 'Sign Up'];
	// пункты меню для бургера
	const burgerMenu = [...pcMenu.filter(el => el !== 'Requirements'),
		'Terms and Conditions', 'How it works', 'Partnership', 'Help',
		'Level testimonial', 'Contact us', 'Articles', 'Our news', 'Testimonials',
		'Licenses', 'Privacy Policy'];
	// выбираем какие пункты отображать в зависимости от типа мею буогер или обычное
	const menuItems = props.isBurgerMenu ? cutArray(burgerMenu, 5) : pcMenu;
	// диспачим в стейт id посещенных пунктов меню
	const onClickItem = (e) => dispatch(addVisitedLink(e.currentTarget.id));

	return <Menu menuItems={menuItems}
		addClass={props.addClass}
		onClickItem={onClickItem}
		visitedLinkId={visitedLinkId}
		isBurgerMenu={props.isBurgerMenu} />
}


export default MenuContainer;