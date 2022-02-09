
import Users from "./Users"
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addUsers, getUsers } from "../../redux/thunkCreation";
import { useSelector } from 'react-redux';
import { useState } from 'react';




const UsersContainer = (props) => {

	const dispatch = useDispatch();
	const users = useSelector(state => state.users.users);
	const isFetching = useSelector(state => state.users.isFetching);
	const isReg = useSelector(state => state.users.isReg);
	const { is768, is1024 } = useSelector(state => state.mediaQuery.breakPoints);

	const [isShowMore, setIsShowMore] = useState(false);

	const numShowUsers = is1024 ? 9 : (is768 ? 6 : 3);


	useEffect(() => {
		isReg && setIsShowMore(false);
		!isShowMore && dispatch(getUsers(numShowUsers));
	}, [numShowUsers, isReg])



	const title = `Our cheerful users `;
	const subtitle = `The best specialists are shown below`;


	const onClickBtn = () => {
		dispatch(addUsers(users.nextPage));
		!isShowMore && setIsShowMore(true);
	}

	return <Users
		users={users.users}
		onClickBtn={onClickBtn}
		title={title}
		subtitle={subtitle}
		disebledBtn={isFetching}
		hiddenBtn={users.nextPage === null || +users.totalUsers == users.length}

	/>
}

export default UsersContainer;