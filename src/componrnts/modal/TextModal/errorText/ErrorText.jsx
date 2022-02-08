import { useSelector } from "react-redux";

const ErrorText = (props) => {
	const errorMessage = useSelector(state => state.users.errorMessage);
	const addErrorText = (errorMessage) => errorMessage !== undefined && errorMessage.map((el, i) => <div key={i}>{el}</div>);



	return (
		<>
			{errorMessage && (
				<div>
					{typeof (errorMessage) == "string" && <div > {errorMessage}</div>}
					{errorMessage.message !== undefined && <div>	{errorMessage.message}</div>}
					{errorMessage.fails !== undefined && <div>
						{addErrorText(errorMessage.fails.count)}
						{addErrorText(errorMessage.fails.page)}
					</div>}
				</div >
			)}

		</>
	)
}

export default ErrorText;