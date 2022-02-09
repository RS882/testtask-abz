import { useSelector } from "react-redux";

const ErrorText = (props) => {

	const errorMessage = useSelector(state => state.users.errorMessage);
	const addErrorText = (errorMessage) => errorMessage !== undefined && errorMessage.map((el, i) => <div key={i}>{el}</div>);
	const errorElem = [];
	for (const key in errorMessage.fails) errorElem.push(addErrorText(errorMessage.fails[key]));

	return (
		<>
			{errorMessage && (
				<div>
					{typeof (errorMessage) == "string" && <div > {errorMessage}</div>}
					{errorMessage.message !== undefined && <div>	{errorMessage.message}</div>}
					{errorMessage.fails !== undefined && <div>{errorElem}</div>
					}
				</div >
			)}

		</>
	)
}

export default ErrorText;