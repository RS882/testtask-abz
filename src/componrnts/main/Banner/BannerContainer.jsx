import { useSelector } from "react-redux";
import { cutString } from "../../utilits/functions";
import bannerImg from "./../../../assets/img/Banner_photo.webp"
import Banner from "./Banner";
import { onClickBtn } from '../../utilits/recirect';
import { cutTextWithDot } from './../../utilits/functions';


const BannerContainer = (props) => {
	const { is768, is1024 } = useSelector(state => state.mediaQuery.breakPoints);

	const title = `Test assignment for front-end developers`

	const articleText = `Front-end developers make sure the user sees and 
	interacts with all the necessary elements to ensure conversion.
	 Therefore, responsive design, programming languages and specific
	  frameworks are the must-have skillsets to look for when assessing 
	  your front-end developers. `;

	const articleTextMod = cutTextWithDot(articleText, is768, is1024);

	const titleMod = cutString(title, 50);



	return <Banner titleMod={titleMod}
		articleTextMod={articleTextMod}
		bannerImg={bannerImg}
		onClickBtn={onClickBtn}
	/>

}

export default BannerContainer;
