import image_296x260 from './../../../assets/img/Image-296x260.svg';
import image_328x287 from './../../../assets/img/Image-328x287.svg';
import image_387x340 from './../../../assets/img/Image-387x340.svg';
import Article from './Article';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeArticleIsScroll } from '../../redux/scrollReducer';

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

	const dispatch = useDispatch();
	const setScroll = (is) => dispatch(changeArticleIsScroll(is))
	const articleRef = useRef(null);
	useEffect(() => {
		const current = articleRef.current;

		const callbackFunction = entries => entries[0].isIntersecting ? setScroll(true) : setScroll(false);
		// создаем асинх наблюдателя за пересечением. процент переченение 1
		const observer = new IntersectionObserver(callbackFunction, { threshold: 1.0, rootMargin: '0px 0px 60px 0px' })
		//добавляем наблюдателя
		observer.observe(current);
		// снимаем наблюдателя при демонтировки компоненті
		return () => observer.unobserve(current);
	}, [articleRef]);



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