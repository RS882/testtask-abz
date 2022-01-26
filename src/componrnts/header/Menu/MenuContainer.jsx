
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addVisitedLink } from '../../redux/headerSlice';
import Menu from './Menu';
import { cutArray } from './../../unilits/functions';


const MenuContainer = (props) => {
	const visitedLinkId = useSelector((state) => state.header.visitedLinkId);
	const dispatch = useDispatch();

	const pcMenu = ['About me', 'Relationships', 'Requirements', 'Users', 'Sign Up'];
	const burgerMenu = [...pcMenu.filter(el => el !== 'Requirements'),
		'Terms and Conditions', 'How it works', 'Partnership', 'Help',
		'Level testimonial', 'Contact us', 'Articles', 'Our news', 'Testimonials',
		'Licenses', 'Privacy Policy'];



	const menuItems = props.isBurgerMenu ? cutArray(burgerMenu, 5) : pcMenu;

	const onClickItem = (e) => dispatch(addVisitedLink(e.currentTarget.id));

	return <Menu menuItems={menuItems}
		onClickItem={onClickItem}
		visitedLinkId={visitedLinkId}
		isBurgerMenu={props.isBurgerMenu} />
}


export default MenuContainer;