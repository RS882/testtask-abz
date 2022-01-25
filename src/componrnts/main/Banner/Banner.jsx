import bannerImg from "./../../../assets/img/Banner_photo.webp"
import Button from './../../button/button';


const Banner = (props) => {
	return (
		<div className="main__banner banner">
			<div className="banner__container container">
				<div className="banner__article article">
					<h1 className="article__title">
						Test assignment for front-end developers
					</h1>
					<article className="article__article">
						Front-end developers make sure the user sees and
						interacts with all the necessary elements to ensure conversion.
						Therefore, responsive design, programming languages and specific
						frameworks are the must-have skillsets to look for when assessing
						your front-end developers.
					</article>
					<div className="article__btn">
						<Button onClickBtn={props.onClickBtn} btnType={'button'} text={'Sign up'} />
					</div>
				</div>
			</div>

		</div>
	)
}

export default Banner;

