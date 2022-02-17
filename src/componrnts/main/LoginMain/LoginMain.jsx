
import LoginPageContainer from './../../LoginPage/LoginPageContainer';
import { useSelector } from 'react-redux';

const LoginMain = (props) => {
	// страница логина

	//загружаем по мене прокрутки станицы
	const isScroll = useSelector(state => state.scroll.articleIsScroll);

	return (
		<div className="main__login">
			{!isScroll && <LoginPageContainer />}
		</div>
	)
}
export default LoginMain;