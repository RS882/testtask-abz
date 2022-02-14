import { useEffect, useRef } from "react"
// отслеживам скрол на странице
export const useHeaderWhenScroll = (scroll) => {
	// подключемся к рефу
	const containerRef = useRef(null);
	// колбек если есть пересчение целевого элемента  вызвается колбек с true или false
	const callbackFunction = entries => entries[0].isIntersecting ? scroll(false) : scroll(true);
	useEffect(() => {
		const current = containerRef.current;
		// создаем асинх наблюдателя за пересечением. процент переченение 1
		const observer = new IntersectionObserver(callbackFunction, { threshold: 1, })
		//добавляем наблюдателя
		current && observer.observe(current);
		// снимаем наблюдателя при демонтировки компоненті
		return () => current && observer.unobserve(current);
	}, [containerRef]);

	return containerRef;
}

