
import React, { Suspense } from 'react';

import PreloaderModal from './../modal/PreloaderModal/PreloaderModal';

const BannerContainer = React.lazy(() => import('./Banner/BannerContainer'))
const ArticleContainer = React.lazy(() => import('./Article/ArticleContainer'))
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'))
const LoginMain = React.lazy(() => import('./LoginMain/LoginMain'))


const Main = (props) => {

	return (
		<main className='main'>
			<Suspense fallback={<PreloaderModal />}>
				<BannerContainer />
				<ArticleContainer />
				<UsersContainer />
				<LoginMain />
			</Suspense>
		</main>
	)
}

export default Main;