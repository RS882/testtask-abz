import React from 'react';
import Header from './componrnts/header/Header';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from './componrnts/Hook/useMediaQuery';
import { setBreakPoints, setIsRetina } from './componrnts/redux/mediaQuerySlice';
import { useEffect, useRef, Suspense } from 'react';
import { setScrollWidth } from './componrnts/redux/modalReducer';
import PreloaderModal from './componrnts/modal/PreloaderModal/PreloaderModal';
import { isRetina } from './componrnts/utilits/functions';

const Footer = React.lazy(() => import('./componrnts/footer/Footer'));
const ModalPage = React.lazy(() => import('./componrnts/modal/ModalPage'));
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
  // определяем ширину полосы прокрутки и диспачим ее в стейт
  const appRef = useRef(null);
  useEffect(() => {
    const elem = appRef.current;
    elem.style.overflowY = `scroll`;
    dispatch(setScrollWidth(elem.offsetWidth - elem.clientWidth));
    elem.style.overflowY = `auto`;
  }, []);
  // лочим страницу если isBodyLock true( сработало модальное окно) 
  const isBodyLock = useSelector(state => state.modal.isBodyLock);
  document.body.style.overflow = isBodyLock ? 'hidden' : 'auto';
  //+ убираем сдивиг при пропадении полосу прокрутки
  const appScroll = { paddingRight: isBodyLock ? `${scrollWidth}px` : '' };
  // проверям дисплей на Retina
  dispatch(setIsRetina(isRetina()));


  return (
    <div className="app" ref={appRef} style={appScroll}>
      <Suspense fallback={<PreloaderModal />}>
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
        <ModalPage />
      </Suspense>
    </div>
  );
}

export default App;
