

import { useSelector } from 'react-redux';
import React, { Suspense } from 'react';
import PreloaderModal from './../../modal/PreloaderModal/PreloaderModal';

const LoginPageContainer = React.lazy(() => import('./../../LoginPage/LoginPageContainer'))
const LoginMain = (props) => {

	// страница логина

	//загружаем по мене прокрутки станицы
	const isScroll = useSelector(state => state.scroll.articleIsScroll);

	return (
		<div className="main__login">
			{isScroll && <Suspense fallback={<PreloaderModal />}>
				<LoginPageContainer />
			</Suspense>}
		</div>
	)
}
export default LoginMain;