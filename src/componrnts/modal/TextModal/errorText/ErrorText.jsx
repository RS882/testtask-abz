import { useSelector } from "react-redux";

const ErrorText = (props) => {

	const errorMessage = useSelector(state => state.users.errorMessage);
	const addErrorText = (errorMessage) => errorMessage !== undefined && errorMessage.map((el, i) => <div key={i + el}>{el}</div>);
	const errorElem = [];
	// трансформируем объект с ошибками в массив
	for (const key in errorMessage.fails) errorElem.push(addErrorText(errorMessage.fails[key]));
	// выводим сообщение об ошибке в зависимости от формата сообщений об ошибке
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