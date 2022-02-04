import { useDispatch, useSelector } from "react-redux";
import { changeIsModal } from "../redux/modalReducer";
import Login from "./Login"


const LoginPageContainer = (props) => {

	const isModal = useSelector(state => state.modal.isModal);
	const dispatch = useDispatch();
	const setIsModal = (is) => dispatch(changeIsModal(is));

	const title = `Register to get a work`;
	const subtitle = `Your personal data is stored according to the Privacy Policy`;
	const positions = [
		{
			"id": 1,
			"name": "Security"
		},
		{
			"id": 2,
			"name": "Designer"
		},
		{
			"id": 3,
			"name": "Content manager"
		},
		{
			"id": 4,
			"name": "Lawyer"
		}
	]

	const modal = {
		title: `Congratulations`,
		text: `You have successfully passed the registration `,
		onClickBtn: () => setIsModal(false),
		btnText: `Great`,
	};

	return (
		<Login
			positions={JSON.parse(JSON.stringify(positions))}
			title={title}
			subtitle={subtitle}
			modal={modal}
			isModal={isModal}
			setIsModal={setIsModal}
			titleStyle={props.titleStyle}
		/>
	)
}

export default LoginPageContainer;