
import Users from './Users/Users';
import Login from '../LoginPage/LoginPage';
import BannerContainer from './Banner/BannerContainer';
import ArticleContainer from './Article/ArticleContainer';


const Main = (props) => {

	return (
		<main className='main'>
			<BannerContainer />
			<ArticleContainer />
			<Users />
			<Login />

		</main>
	)
}

export default Main;