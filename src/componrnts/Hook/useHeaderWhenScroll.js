import { useEffect, useRef } from "react"
import { useDispatch } from 'react-redux';
import { changeIsSrcoll } from "../redux/headerSlice";


export const useHeaderWhenScroll = () => {
	const containerRef = useRef(null)

	const dispatch = useDispatch();
	const setIsScroll = (is) => dispatch(changeIsSrcoll(is));

	const callbackFunction = (entries) => {

		entries[0].isIntersecting ? setIsScroll(false) : setIsScroll(true);
	};

	useEffect(() => {

		const observer = new IntersectionObserver(callbackFunction, { threshold: 1, })
		if (containerRef.current) observer.observe(containerRef.current)

		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current)
		}
	}, [containerRef])

	return containerRef
}

