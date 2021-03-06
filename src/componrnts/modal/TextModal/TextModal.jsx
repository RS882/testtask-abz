import { useDispatch, useSelector } from "react-redux";
import { changeIsModal } from "../../redux/modalReducer";
import { clearError } from "../../redux/usersReducer";
import Modal from "../modal";
import ErrorText from "./errorText/ErrorText";
import ModalText from './modalText';
import { useNavigate } from 'react-router-dom';



const TextModal = (props) => {

	const isModal = useSelector(state => state.modal.isModal);
	const isError = useSelector(state => state.users.isError);
	const isReg = useSelector(state => state.users.isReg)
	const dispatch = useDispatch();
	const setIsModal = (is) => dispatch(changeIsModal(is));
	const clearErrorFalse = () => dispatch(clearError());
	// редиректим на основную страницу
	const redirect = useNavigate();
	const redirectToMain = () => redirect(`/`);

	const modal = {
		title: isError ? 'Opps there seems to be an error ' : `Congratulations`,
		text: isError ? <ErrorText /> : `You have successfully passed the registration `,
		onClickBtn: () => {
			clearErrorFalse();//очищаем сообщение об ошибке в стейте
			setIsModal(false);// закрыввем модальное окно
			isReg && redirectToMain();		// редирект на главную страницу
		},
		btnText: isError ? `Back` : `Great`,
	};
	// создаем компоненту с тестовым сообщнием
	const TextModal = Modal(ModalText);

	return (
		<>
			{(isModal || isError) && <TextModal {...modal} />}
		</>
	)
}

export default TextModal;