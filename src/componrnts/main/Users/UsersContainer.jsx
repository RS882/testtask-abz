
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers, getUsers } from "../../redux/thunkCreation";
import { useSelector } from 'react-redux';
import { useState, Suspense } from 'react';
import PreloaderModal from './../../modal/PreloaderModal/PreloaderModal';
const Users = React.lazy(() => import('./Users'))


const UsersContainer = (props) => {
	const dispatch = useDispatch();
	const users = useSelector(state => state.users.users);
	// есть ли процесс загрузки
	const isFetching = useSelector(state => state.users.isFetching);
	// зареган ли пользователь
	const isReg = useSelector(state => state.users.isReg);

	// проверка значений брейкпоинта
	const { is768, is1024 } = useSelector(state => state.mediaQuery.breakPoints);
	// если была нажата кнопка showMore -true
	const [isShowMore, setIsShowMore] = useState(false);
	// колличество добавляемых/(показываемых при старте) пользователей
	const numShowUsers = is1024 ? 9 : (is768 ? 6 : 3);
	//загружаем по мене прокрутки станицы
	const isScroll = useSelector(state => state.scroll.articleIsScroll);
	useEffect(() => {
		// возврщаем занчение нажатие кнопки showMore -fals- если пользователь уже зареган
		isReg && setIsShowMore(false);
		// если не был нажата showMore 
		!isShowMore && isScroll && dispatch(getUsers(numShowUsers));
	}, [numShowUsers, isReg, isScroll])
	// текст заголовка
	const title = `Our cheerful users `;
	// текст подзаголовка
	const subtitle = `The best specialists are shown below`;
	const onClickBtn = () => {
		// загружаем следующую старницу с пользователями
		dispatch(addUsers(users.nextPage));
		// если до этого showMore не была нажата- ставим занчение нажатия в true
		!isShowMore && setIsShowMore(true);
	}


	return <div className='users_t'>
		{isScroll &&
			<Suspense fallback={<PreloaderModal />}>
				<Users
					users={users.users}
					onClickBtn={onClickBtn}
					title={title}
					subtitle={subtitle}
					disebledBtn={isFetching}
					// прячем кнопку showMore если нет сл. страницы для показа 
					// или количество показанных пользователей равно количеству всех пользователей 
					hiddenBtn={users.nextPage === null || +users.totalUsers == users.length}
				/>
			</Suspense>}
	</div>
}
export default UsersContainer;