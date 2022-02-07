
import Button from '../button/button';
import LoginPageContainer from './LoginPageContainer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const LoginPage = (props) => {

	const redirect = useNavigate();
	const { is768 } = useSelector(state => state.mediaQuery.breakPoints);


	const titleStyle = is768 ? {
		fontSize: '40px',
		lineHeight: '40px',
		marginBottom: '10px'
	} : {
		fontSize: '22px',
		lineHeight: '28px',
		marginBottom: '20px'
	};


	return (
		<div>

			<div className="login-page">
				<LoginPageContainer titleStyle={titleStyle} />
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