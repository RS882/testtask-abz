
import Banner from './Banner/Banner';
import Article from './Article/Article';
import Users from './Users/Users';
import Login from '../LoginPage/LoginPage';

const Main = (props) => {


	return (
		<main className='main'>

			<Banner />
			<Article />
			<Users />
			<Login />

			{/* <div className='main__wrapper'>
				<div className='main__bg'>
					<img src={banner} alt='main banner' />
				</div>
			</div> */}
		</main>
	)
}

export default Main;