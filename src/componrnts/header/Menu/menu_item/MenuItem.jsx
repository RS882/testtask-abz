
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
	// создаем уникальную id для пункта меню
	const idItem = (props.el).toLowerCase().split('').map(e => (e === ' ') ? `_` : e).join('');

	return (
		<li className={`${props.addClass} item-menu`} onClick={props.onClickItem} id={idItem}>
			{/* все сссылки ведут на регистарцию */}
			<NavLink to={'/login'}
				// меняем цвет текста если пункт меню посещался
				style={{ color: props.visited.includes(idItem) && `#00BDD3`, }}
			>{props.el}</NavLink>
		</li>
	)
}

export default MenuItem;