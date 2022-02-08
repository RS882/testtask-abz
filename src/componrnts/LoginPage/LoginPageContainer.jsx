
import Login from "./Login"
import { useEffect } from 'react';
import { getPositions } from './../redux/thunkCreation';
import { useDispatch, useSelector } from "react-redux";



const LoginPageContainer = (props) => {

	const positions = useSelector(state => state.users.positions);
	const dispatch = useDispatch();
	const title = `Register to get a work`;
	const subtitle = `Your personal data is stored according to the Privacy Policy`;

	useEffect(() => {
		dispatch(getPositions());
	}, []);

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