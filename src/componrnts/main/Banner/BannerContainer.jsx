import { useDispatch, useSelector } from "react-redux";
import bannerImg from "./../../../assets/img/banner.webp";
import bannerImgMob2x from "./../../../assets/img/banner_mob@2x.webp";

import Banner from "./Banner";

import { useNavigate } from 'react-router-dom';

import { cutString } from "../../utilits/functions";
import { changeIsSrcoll } from "../../redux/headerSlice";
import { useRef, useState } from "react";
import { useEffect } from "react";


const BannerContainer = (props) => {
	// проверка значений брейкпоинта
	const { is768 } = useSelector(state => state.mediaQuery.breakPoints);
	// текст заголовка
	const title = `Test assignment for front-end developers `
	//текст статьи
	let articleText = `Front-end developers make sure the user sees and 
	interacts with all the necessary elements to ensure conversion.
	 Therefore, responsive design, programming languages and specific
	  frameworks are the must-have skillsets to look for when assessing 
	  your front-end developers. `;
	// образем тест статьи при ширине меньше 768
	if (!is768) {
		const dotPos = articleText.indexOf('.') + 1;
		articleText = (dotPos && dotPos < 117) ? cutString(articleText, dotPos, '') :
			cutString(articleText, 120);
	};
	// редиректим на страницу регистарции при нажатии кнопки
	const redirect = useNavigate();

	const dispatch = useDispatch();
	// функция изменения значения isScroll- для изменения стиля header при скороле
	const setIsScroll = (is) => dispatch(changeIsSrcoll(is));
	// привязывем реф для получение значения скрола
	const containerRef = useRef(null);

	useEffect(() => {
		const current = containerRef.current;
		const callbackFunction = (entries, observer) => {

			return entries[0].isIntersecting ? setIsScroll(true) : setIsScroll(false)
		};
		// создаем асинх наблюдателя за пересечением. процент переченение 1 и отсупом сверху 60
		const observer = new IntersectionObserver(callbackFunction, { threshold: 1.0, rootMargin: '60px 0px 0px 0px' })
		//добавляем наблюдателя
		observer.observe(current);
		// снимаем наблюдателя при демонтировки компоненті
		return () => observer.unobserve(current);
	}, [containerRef]);
	//=================================
	const [bgImg, setBgImg] = useState(null);

	useEffect(() => {

		setBgImg(is768 ? bannerImg : bannerImgMob2x);
	}, [])

	return (
		<div ref={containerRef} >
			<Banner titleMod={title}
				articleTextMod={articleText}

				bannerImg={bgImg}
				onClickBtn={() => redirect(`/login`)}
			/>
		</div>)
}

export default BannerContainer;
