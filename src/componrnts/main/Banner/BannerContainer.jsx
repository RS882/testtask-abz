import { useSelector } from "react-redux";
import { cutString } from "../../utilits/functions";
import bannerImg from "./../../../assets/img/Banner_photo.webp"
import Banner from "./Banner";
import { cutTextWithDot } from './../../utilits/functions';
import { useNavigate } from 'react-router-dom';
import { useHeaderWhenScroll } from './../../Hook/useHeaderWhenScroll';


const BannerContainer = (props) => {
	const { is768, is1024 } = useSelector(state => state.mediaQuery.breakPoints);

	const title = `Test assignment for front-end developers `

	const articleText = `Front-end developers make sure the user sees and 
	interacts with all the necessary elements to ensure conversion.
	 Therefore, responsive design, programming languages and specific
	  frameworks are the must-have skillsets to look for when assessing 
	  your front-end developers. `;

	const articleTextMod = cutTextWithDot(articleText, is768, is1024);

	const titleMod = cutString(title, 50);

	const redirect = useNavigate();

	const containerRef = useHeaderWhenScroll();

	return (
		<div ref={containerRef}>
			<Banner titleMod={title}
				articleTextMod={articleText}
				bannerImg={bannerImg}
				onClickBtn={() => redirect(`/login`)}
			/>
		</div>)
}

export default BannerContainer;
