
import { NavLink } from 'react-router-dom';
import logo from './../../../assets/img/Logo.svg';

const Logo = (props) => {

	return (
		<div className={props.boxClass}>
			<NavLink to={'/login'} className={props.linkClass}>
				<img src={logo} alt='logo' />
			</NavLink>
		</div>
	)
}

export default Logo