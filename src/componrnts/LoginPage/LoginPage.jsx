import Button from '../button/button';
import LoginPageContainer from './LoginPageContainer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const LoginPage = (props) => {
	// отдельная страница логина

	// проверка значений брейкпоинта
	const { is768 } = useSelector(state => state.mediaQuery.breakPoints);
	// стиль заголовка от рамера окна
	const titleStyle = is768 ? {
		fontSize: '40px',
		lineHeight: '40px',
		marginBottom: '10px'
	} : {
		fontSize: '22px',
		lineHeight: '28px',
		marginBottom: '20px'
	};
	// редиректим на основную страницу
	const redirect = useNavigate();
	const redirectToMain = () => redirect(`/`);
	return (
		<div>
			<div className="login-page">
				<LoginPageContainer titleStyle={titleStyle} />
			</div>
			<div className="login-page__btn">
				<Button
					onClickBtn={redirectToMain}
					btnType={'button'}
					text={'Back'}
				/>
			</div>
		</div>
	)
}
export default LoginPage;