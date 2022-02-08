import { useDispatch, useSelector } from "react-redux";
import { changeIsModal } from "../../redux/modalReducer";
import { clearError } from "../../redux/usersReducer";
import Modal from "../modal";
import ErrorText from "./errorText/ErrorText";
import ModalText from './modalText';



const TextModal = (props) => {

	const isModal = useSelector(state => state.modal.isModal);
	const dispatch = useDispatch();
	const setIsModal = (is) => dispatch(changeIsModal(is));
	const clearErrorFalse = () => dispatch(clearError());

	const isError = useSelector(state => state.users.isError);

	const modal = {
		title: isError ? 'Opps there seems to be an error ' : `Congratulations`,
		text: isError ? <ErrorText /> : `You have successfully passed the registration `,
		onClickBtn: () => {
			clearErrorFalse();
			setIsModal(false);
		},
		btnText: isError ? `Back` : `Great`,
	};

	const TextModal = Modal(ModalText);

	return (
		<>
			{(isModal || isError) && <TextModal {...modal} />}
		</>
	)
}

export default TextModal;