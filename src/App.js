import React from 'react';
import ModalPage from './componrnts/modal/ModalPage';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from './componrnts/Hook/useMediaQuery';
import { setBreakPoints, setIsRetina } from './componrnts/redux/mediaQuerySlice';
import { useEffect, useRef, Suspense, useState } from 'react';
import { setScrollWidth } from './componrnts/redux/modalReducer';
import PreloaderModal from './componrnts/modal/PreloaderModal/PreloaderModal';
import { isRetina } from './componrnts/utilits/functions';
import { stopFetching } from './componrnts/redux/usersReducer';

const Footer = React.lazy(() => import('./componrnts/footer/Footer'));
const Header = React.lazy(() => import('./componrnts/header/Header'));
const Main = React.lazy(() => import('./componrnts/main/Main'));
const LoginPage = React.lazy(() => import('./componrnts/LoginPage/LoginPage'));


const App = () => {
  const dispatch = useDispatch();
  // получаем значение ширины полосы прокрутки
  const scrollWidth = useSelector(state => state.modal.scrollWidth);
  const breakPoints = {
    // устанвливаем значения брейкпоинтов true/false
    is768: useMediaQuery('(min-width: 767.98px)'),
    is1024: useMediaQuery('(min-width: 1023.98px)'),
    is1392: useMediaQuery('(min-width: 1392px)'),
  };
  useEffect(() => {
    // диспачим значения брейкпоинтов в стейт при изменении брейкпоинтов
    dispatch(setBreakPoints(breakPoints));
  }, [breakPoints]);

  const appRef = useRef(null);
  useEffect(() => {
    // определяем ширину полосы прокрутки и диспачим ее в стейт
    const elem = appRef.current;
    elem.style.overflowY = `scroll`;
    dispatch(setScrollWidth(elem.offsetWidth - elem.clientWidth));
    elem.style.overflowY = `auto`;
    // проверям дисплей на Retina
    dispatch(setIsRetina(isRetina()));
  }, []);
  // лочим страницу если isBodyLock true( сработало модальное окно) 
  const isBodyLock = useSelector(state => state.modal.isBodyLock);
  document.body.style.overflow = isBodyLock ? 'hidden' : 'auto';
  //+ убираем сдивиг при пропадении полосу прокрутки
  const appScroll = { paddingRight: isBodyLock ? `${scrollWidth}px` : '' };

  const [content, setContent] = useState(``)
  useEffect(() => {
    dispatch(stopFetching());
    setContent(<Suspense fallback={<PreloaderModal />}>
      <Routes >
        <Route index element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/login' element={< LoginPage />} />
      </Routes>
    </Suspense>)
  }, [])

  return (
    <div className="app" ref={appRef} style={appScroll}>
      <ModalPage />
      {content}
    </div>
  );
}

export default App;
