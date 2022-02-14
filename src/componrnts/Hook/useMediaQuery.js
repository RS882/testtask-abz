import { useState, useEffect } from 'react';
// выдает true / false если размер  окна соответсвует/не соответвует условию query
// пример query '(min-width: 767.98px)'
export const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		// создаем мультимедиа запрос
		const media = window.matchMedia(query);
		//меняем значение matches если оно не равно media.matches
		if (media.matches !== matches) setMatches(media.matches);
		// меняем колбеком знаяение  matches через слушателя
		const listener = () => setMatches(media.matches);
		// создаем слушателя на изменение размера .
		window.addEventListener("resize", listener);
		// при размонтировке компоненты - удалям слушателя
		return () => window.removeEventListener("resize", listener);
	}, [matches, query]);

	return matches;
};
