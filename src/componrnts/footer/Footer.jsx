
import { useSelector } from 'react-redux';
import UserCard from '../main/userCard/UssrCard';

import footPrint_328x124 from './../../assets/img/Footprint-328x124.svg';
import footPrint_467x177 from './../../assets/img/Footprint-467x177.svg';
import footPrint_972x177 from './../../assets/img/Footprint-972x177.svg';

const Footer = (props) => {

	const { is768, is1392, ...rest } = useSelector(state => state.mediaQuery.breakPoints);

	let bPoints = is768 ? footPrint_467x177 : footPrint_328x124;
	bPoints = is1392 ? footPrint_972x177 : bPoints;

	// debugger
	// console.log(is768);
	// console.log(is1392);
	// console.log(bPoints);

	const user = {
		"id": "42",
		"name": "Lorraine",
		"email": "lorraine.morris@example.com",
		"phone": "+380945198009",
		"position": "Designer",
		"position_id": "4",
		"registration_timestamp": 1537629182,
		"photo": "https://frontend-test-assignment-api.abz.agency/images/users/5b977ba293d2f42.jpeg"
	}
	return (
		<footer className='footer'>
			<UserCard {...user} />
			<div style={{ backgroundImage: `url(${bPoints})` }}
				className='footer__foot-img'></div>

			<div className='footer__text'>© abz.agency specially for the test task</div>

		</footer>
	)
}

export default Footer;