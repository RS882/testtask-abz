import { useDispatch, useSelector } from "react-redux";
import bannerImg from "./../../../assets/img/Banner_photo.webp"
import Banner from "./Banner";

import { useNavigate } from 'react-router-dom';
import { useHeaderWhenScroll } from './../../Hook/useHeaderWhenScroll';
import { cutString } from "../../utilits/functions";
import { changeIsSrcoll } from "../../redux/headerSlice";


const BannerContainer = (props) => {
	const { is768 } = useSelector(state => state.mediaQuery.breakPoints);

	const title = `Test assignment for front-end developers `

	let articleText = `Front-end developers make sure the user sees and 
	interacts with all the necessary elements to ensure conversion.
	 Therefore, responsive design, programming languages and specific
	  frameworks are the must-have skillsets to look for when assessing 
	  your front-end developers. `;

	if (!is768) {
		const dotPos = articleText.indexOf('.') + 1;
		articleText = (dotPos && dotPos < 117) ? cutString(articleText, dotPos, '') :
			cutString(articleText, 120);
	};
	const redirect = useNavigate();

	const dispatch = useDispatch();
	const setIsScroll = (is) => dispatch(changeIsSrcoll(is));

	const containerRef = useHeaderWhenScroll(setIsScroll);

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
