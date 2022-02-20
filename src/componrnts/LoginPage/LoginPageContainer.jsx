import Login from "./Login"
import { useEffect } from 'react';
import { getPositions } from './../redux/thunkCreation';
import { useDispatch, useSelector } from "react-redux";

const LoginPageContainer = (props) => {
	// позиция пользователей
	const positions = useSelector(state => state.users.positions);
	const dispatch = useDispatch();
	// текст заголовка
	const title = `Register to get a work`;
	// текст подзаголовка
	const subtitle = `Your personal data is stored according to the Privacy Policy`;

	const isScroll = useSelector(state => state.scroll.articleIsScroll);

	useEffect(() => {
		// получаем позиции пользователей
		isScroll && dispatch(getPositions());
	}, [isScroll]);
	return (
		<Login
			positions={positions}
			title={title}
			subtitle={subtitle}
			titleStyle={props.titleStyle}

		/>
	)
}

export default LoginPageContainer;