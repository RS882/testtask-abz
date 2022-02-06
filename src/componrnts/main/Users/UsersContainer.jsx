
import Users from "./Users"
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addUsers, getUsers } from "../../redux/thunkCreation";
import { useSelector } from 'react-redux';

const UsersContainer = (props) => {

	const dispatch = useDispatch();
	const users = useSelector(state => state.users.users);
	const nextPage = useSelector(state => state.users.nextPage);

	const { is768, is1024 } = useSelector(state => state.mediaQuery.breakPoints);

	const numShowUsers = is1024 ? 9 : (is768 ? 6 : 3);


	console.log(users);



	useEffect(() => {
		dispatch(getUsers(numShowUsers))
	}, [numShowUsers])


	const title = `Our cheerful users `;
	const subtitle = `The best specialists are shown below`;


	const onClickBtn = () => {
		//dispatch(addUsers(nextPage));
		console.log(`show more`);
	}


	return <Users
		users={users}
		onClickBtn={onClickBtn}
		title={title}
		subtitle={subtitle}
		disebledBtn={false}
		hiddenBtn={nextPage === null}
	/>
}

export default UsersContainer;