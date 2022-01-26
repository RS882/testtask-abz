import Button from './../../button/button';


const Banner = (props) => {

	return (
		<div className="main__banner banner">
			<div className="banner__bg" style={{ backgroundImage: `url(${props.bannerImg})` }}></div>
			<div className="banner__container container">
				<div className="banner__article article">
					<h1 className="article__title">{props.titleMod}</h1>
					<article className="article__article">{props.articleTextMod}</article>
					<div className="article__btn">
						<Button onClickBtn={props.onClickBtn} btnType={'button'} text={'Sign up'} />
					</div>
				</div>
			</div>
		</div >
	)
}

export default Banner;
