import image_296x260 from './../../../assets/img/Image-296x260.svg';
import image_328x287 from './../../../assets/img/Image-328x287.svg';
import image_387x340 from './../../../assets/img/Image-387x340.svg';
import Article from './Article';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useHeaderWhenScroll } from './../../Hook/useHeaderWhenScroll';

import { useState } from 'react';

const ArticleContainer = (props) => {
	// проверка значений брейкпоинта
	const { is768, is1024 } = useSelector(state => state.mediaQuery.breakPoints);
	// текст заголовка
	const title = ` Let's get acquainted `;
	// текст подзаголовка
	const subtitle = `I'm a good front-end developer `;
	// текст статьи
	const text = `What defines a good front-end developer is one that has 
	skilled knowledge of HTML, CSS, JS with a vast understanding of User design 
	thinking as they'll be building web interfaces with accessibility in mind. 
	They should also be excited to learn, as the world 
	of Front-End Development keeps evolving. `;
	// выбор картики в зависимости от брейкпоинта
	let image = is768 ? image_296x260 : image_328x287;
	image = is1024 ? image_387x340 : image;
	// редиректим на страницу регистарции при нажатии кнопки
	const redirect = useNavigate();

	const [scroll, setIsScroll] = useState(true)




	const setScroll = (is) => {
		// console.log(is);

		const res = scroll ? is : scroll;
		console.log(res);
		setIsScroll(res);
	};

	const articleRef = useHeaderWhenScroll(setScroll, 0);
	console.log(scroll);
	// console.log(res);


	return <div ref={articleRef}>
		<Article
			img={image}
			title={title}
			subtitle={subtitle}
			text={text}
			onClickBtn={() => redirect(`/login`)}
		/>
	</div>
}
export default ArticleContainer;