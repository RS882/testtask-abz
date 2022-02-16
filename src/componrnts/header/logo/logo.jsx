
import { NavLink } from 'react-router-dom';
import logo from './../../../assets/img/Logo.svg';

const Logo = (props) => {
	//логотип
	return (
		<div className={`${props.boxClass} logo`}>
			<NavLink to={'/login'} className={`logo__box ${props.linkClass}`}>
				<img src={logo} alt='logo' width='104' height='26' />
			</NavLink>
		</div>
	)
}

export default Logo