import { useDispatch, useSelector } from "react-redux";
import { changeIsModal } from "../redux/modalReducer";
import Login from "./Login"


const LoginPageContainer = (props) => {

	const isModal = useSelector(state => state.modal.isModal);
	const dispatch = useDispatch();
	const setIsModal = (is) => dispatch(changeIsModal(is));
	const errorMessage = useSelector(state => state.users.errorMessage);

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