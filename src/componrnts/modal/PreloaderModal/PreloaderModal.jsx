import { useDispatch, useSelector } from "react-redux";
import { changeIsBodyLock } from "../../redux/modalReducer";

import Modal from "../modal";
import { useEffect } from 'react';
import Preloader from "./Preloader";



const PreloaderModal = (props) => {

	const dispatch = useDispatch();


	const users = useSelector(state => state.users.users);
	const isFetching = useSelector(state => state.users.isFetching)
	const changeIsLock = (is) => dispatch(changeIsBodyLock(is));
	const isShowModal = isFetching && users.users.length > 0

	useEffect(() => {
		changeIsLock(isShowModal)
	}, [isShowModal])


	const PreloaderModal = Modal(Preloader)

	return (
		<>
			{isShowModal && <PreloaderModal />}
		</>
	)
}

export default PreloaderModal;