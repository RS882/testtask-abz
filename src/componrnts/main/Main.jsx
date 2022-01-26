

import Login from '../LoginPage/LoginPage';
import BannerContainer from './Banner/BannerContainer';
import ArticleContainer from './Article/ArticleContainer';
import UsersContainer from './Users/UsersContainer';


const Main = (props) => {

	return (
		<main className='main'>
			<BannerContainer />
			<ArticleContainer />
			<UsersContainer />
			<Login />

		</main>
	)
}

export default Main;