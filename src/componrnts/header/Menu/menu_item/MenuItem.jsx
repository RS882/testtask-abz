
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {

	const idItem = (props.el).toLowerCase().split('').map(e => (e === ' ') ? `_` : e).join('');

	return (
		<li className={`${props.addClass} item-menu`} onClick={props.onClickItem} id={idItem}>
			<NavLink to={'/login'}
				style={{ color: props.visited.includes(idItem) && `#00BDD3`, }}
			>{props.el}</NavLink>
		</li>
	)
}

export default MenuItem;