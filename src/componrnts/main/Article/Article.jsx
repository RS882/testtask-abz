
import Button from './../../button/button';

const Article = (props) => {

	return (
		<div className="main__article article-main">
			<div className="article-main__container container">
				<div className="article-main__body">
					<div className="article-main__img">
						<img src={props.img} alt="front-end developer" />
					</div>
					<div className="article-main__article article">
						<h2 className="article__title ">{props.title}</h2>
						<h4 className="article__subtitle">{props.subtitle}</h4>
						<article className="article__article article__article-art">{props.text}</article>
						<div className="article__btn article__btn-art">
							<Button onClickBtn={props.onClickBtn} btnType={'button'} text={'Sign up'} />
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
//=========================================================
export default Article;