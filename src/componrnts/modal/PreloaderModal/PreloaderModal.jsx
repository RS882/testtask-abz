import { useDispatch, useSelector } from "react-redux";
import { changeIsBodyLock } from "../../redux/modalReducer";

import Modal from "../modal";
import { useEffect } from 'react';
import Preloader from "./Preloader";



const PreloaderModal = (props) => {

	const dispatch = useDispatch();

	// const users = useSelector(state => state.users.users);
	const isFetching = useSelector(state => state.users.isFetching)
	const changeIsLock = (is) => dispatch(changeIsBodyLock(is));
	// показываем модальное окно если идет загузка и пользователи были загружены ранее
	// (т.е. при первой загузке не показываем )
	// const isShowModal = isFetching && users.users.length > 0

	useEffect(() => {
		// блокировка прокрутки страницы
		changeIsLock(isFetching)
	}, [isFetching])



	const PreloaderModal = Modal(Preloader)
	return (
		<>
			{isFetching && <PreloaderModal bgColor={'none'} />}
		</>
	)
}

export default PreloaderModal;