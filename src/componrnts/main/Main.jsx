
import BannerContainer from './Banner/BannerContainer';
import ArticleContainer from './Article/ArticleContainer';
import UsersContainer from './Users/UsersContainer';
import LoginPageContainer from './../LoginPage/LoginPageContainer';


const Main = (props) => {

	return (
		<main className='main'>
			<BannerContainer />
			<ArticleContainer />
			<UsersContainer />
			<LoginPageContainer />

		</main>
	)
}

export default Main;