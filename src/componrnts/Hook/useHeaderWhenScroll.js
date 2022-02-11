import { useEffect, useRef } from "react"

export const useHeaderWhenScroll = (scroll) => {
	const containerRef = useRef(null);
	const callbackFunction = entries => entries[0].isIntersecting ? scroll(false) : scroll(true);
	useEffect(() => {
		const current = containerRef.current;
		const observer = new IntersectionObserver(callbackFunction, { threshold: 1, })
		current && observer.observe(current);
		return () => current && observer.unobserve(current);
	}, [containerRef]);

	return containerRef;
}

