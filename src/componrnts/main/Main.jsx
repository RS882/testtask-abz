import Article from './Article/Article';
import Users from './Users/Users';
import Login from '../LoginPage/LoginPage';
import BannerContainer from './Banner/BannerContainer';


const Main = (props) => {

	return (
		<main className='main'>
			<BannerContainer />
			<Article />
			<Users />
			<Login />

		</main>
	)
}

export default Main;