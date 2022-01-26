import image_296x260 from './../../../assets/img/Image-296x260.svg';
import image_328x287 from './../../../assets/img/Image-328x287.svg';
import image_387x340 from './../../../assets/img/Image-387x340.svg';
import { onClickBtn } from '../../utilits/recirect';
import Article from './Article';
import { useSelector } from 'react-redux';

const ArticleContainer = (props) => {
	const { is768, is1024 } = useSelector(state => state.mediaQuery.breakPoints);

	const title = `Let's get acquainted`;
	const subtitle = `I'm a good front-end developer`;
	const text = `What defines a good front-end developer 
	is one that has skilled knowledge of HTML, CSS, JS with 
	a vast understanding of User design thinking as they'll 
	be building web interfaces with accessibility in mind. 
	They should also be excited to learn, as the world of 
	Front-End Development keeps evolving.`;

	let image = is768 ? image_296x260 : image_328x287;
	image = is1024 ? image_387x340 : image;

	return <Article
		img={image}
		title={title}
		subtitle={subtitle}
		text={text}
		onClickBtn={onClickBtn}
	/>
}

export default ArticleContainer;