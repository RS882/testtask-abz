import { useDispatch, useSelector } from "react-redux";
import { changeIsModal } from "../../redux/modalReducer";
import Modal from "../modal";
import ModalText from './modalText';



const TextModal = (props) => {

	const isModal = useSelector(state => state.modal.isModal);
	const dispatch = useDispatch();
	const setIsModal = (is) => dispatch(changeIsModal(is));
	const errorMessage = useSelector(state => state.users.errorMessage);


	const addErrorText = (errorMessage) => errorMessage !== undefined && errorMessage.map((el, i) => <div key={i}>{el}</div>);
	const errorText = errorMessage && (
		<div>
			{typeof (errorMessage) == "string" && <div > {errorMessage}</div>}
			{errorMessage.message !== undefined && <div>	{errorMessage.message}</div>}
			{errorMessage.fails !== undefined && <div>
				{addErrorText(errorMessage.fails.count)}
				{addErrorText(errorMessage.fails.page)}
			</div>}
		</div >
	);

	const modal = {
		title: errorMessage ? 'Opps there seems to be an error ' : `Congratulations`,
		text: errorText || `You have successfully passed the registration `,
		onClickBtn: () => setIsModal(false),
		btnText: errorMessage ? `Back` : `Great`,
	};

	const TextModal = Modal(ModalText);
	return (
		<>
			{isModal && <TextModal {...modal} />}
		</>
	)
}

export default TextModal;