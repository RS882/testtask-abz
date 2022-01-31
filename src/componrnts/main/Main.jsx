
import BannerContainer from './Banner/BannerContainer';
import ArticleContainer from './Article/ArticleContainer';
import UsersContainer from './Users/UsersContainer';

import LoginMain from './LoginMain/LoginMain';


const Main = (props) => {

	return (
		<main className='main'>
			<BannerContainer />
			<ArticleContainer />
			<UsersContainer />
			<LoginMain />

		</main>
	)
}

export default Main;