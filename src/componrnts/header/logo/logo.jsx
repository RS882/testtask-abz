
import { NavLink } from 'react-router-dom';
import logo from './../../../assets/img/Logo.svg';

const Logo = (props) => {

	return (
		<div className={`${props.boxClass} logo`}>
			<NavLink to={'/login'} className={`logo__box ${props.linkClass}`}>
				<img src={logo} alt='logo' />
			</NavLink>
		</div>
	)
}

export default Logo