import { useEffect, useRef } from "react"
// отслеживам скрол на странице
const useHeaderWhenScroll = (ref, scroll, threshold = 1) => {
	// подключемся к рефу
	// const containerRef = useRef(null);
	// колбек если есть пересчение целевого элемента  вызвается колбек с true или false
	console.log(ref.current);

	const callbackFunction = entries => {

		// console.log(entries[0]);

		return entries[0].isIntersecting ? scroll(true) : scroll(false);
	}
	useEffect(() => {
		const current = ref.current;
		// создаем асинх наблюдателя за пересечением. процент переченение 1
		const observer = new IntersectionObserver(callbackFunction, { threshold: threshold, })
		//добавляем наблюдателя
		observer.observe(current);
		// снимаем наблюдателя при демонтировки компоненті
		return () => observer.unobserve(current);
	}, [ref]);
	// console.log(containerRef);

	// return containerRef;
}


// const callbackFunction = entries => {

// 	return entries[0].isIntersecting ? setIsScroll(true) : setIsScroll(false);
// }
// useEffect(() => {
// 	const current = containerRef.current;
// 	console.log(containerRef.current);
// 	// создаем асинх наблюдателя за пересечением. процент переченение 1
// 	const observer = new IntersectionObserver(callbackFunction, { threshold: 1, })
// 	//добавляем наблюдателя
// 	observer.observe(current);
// 	// снимаем наблюдателя при демонтировки компоненті
// 	return () => observer.unobserve(current);
// }, [containerRef]);

