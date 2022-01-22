
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addVisitedLink } from '../../redux/headerSlice';

// import { addVisitedLink } from '../../redux/headerReducer';
import Menu from './Menu';


const MenuContainer = (props) => {
	const visitedLinkId = useSelector((state) => state.header.visitedLinkId);
	const dispatch = useDispatch();

	const pcMenu = ['About me', 'Relationships', 'Requirements', 'Users', 'Sign Up'];
	const burgerMenu = [...pcMenu.filter(el => el !== 'Requirements'),
		'Terms and Conditions', 'How it works', 'Partnership', 'Help',
		'Level testimonial', 'Contact us', 'Articles', 'Our news', 'Testimonials',
		'Licenses', 'Privacy Policy'];
	console.log(visitedLinkId);
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
		visitedLinkId={[1, 2, 3]}
		isBurgerMenu={props.isBurgerMenu} />
}


export default MenuContainer;