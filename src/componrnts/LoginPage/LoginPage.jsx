
import Button from '../button/button';
import LoginPageContainer from './LoginPageContainer';
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {

	const redirect = useNavigate();
	return (
		<div>
			<div className="login-page">
				<LoginPageContainer />
			</div>
			<div className="login-page__btn">
				<Button
					onClickBtn={() => redirect(`/`)}
					btnType={'button'}
					text={'Back'}
				/>
			</div>
		</div>
	)
}
export default LoginPage;