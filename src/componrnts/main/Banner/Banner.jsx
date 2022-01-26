import { useSelector } from "react-redux";
import bannerImg from "./../../../assets/img/Banner_photo.webp"
import Button from './../../button/button';


const Banner = (props) => {
	const { is768 } = useSelector(state => state.mediaQuery.breakPoints);

	const addText = is768 ? `Therefore, responsive design, programming languages and specific
frameworks are the must-have skillsets to look for when assessing
your front-end developers.`: ``;

	return (
		<div className="main__banner banner">
			<div className="banner__bg" style={{ backgroundImage: `url(${bannerImg})` }}></div>
			<div className="banner__container container">
				<div className="banner__article article">
					<h1 className="article__title">
						Test assignment for front-end developers
					</h1>
					<article className="article__article">{
						`Front-end developers make sure the user sees and
						interacts with all the necessary elements to ensure conversion. 
						 ${addText}`}
					</article>
					<div className="article__btn">
						<Button onClickBtn={props.onClickBtn} btnType={'button'} text={'Sign up'} />
					</div>
				</div>
			</div>

		</div >
	)
}

export default Banner;

