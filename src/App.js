
import Header from './componrnts/header/Header';
import Main from './componrnts/main/Main';
import Footer from './componrnts/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from './componrnts/Hook/useMediaQuery';
import { setBreakPoints } from './componrnts/redux/mediaQuerySlice';
import { useEffect } from 'react';
import LoginPage from './componrnts/LoginPage/LoginPage';



function App() {

  const dispatch = useDispatch();
  const breakPoints = {
    is768: useMediaQuery('(min-width: 767.98px)'),
    is1024: useMediaQuery('(min-width: 1023.98px)'),
    is1392: useMediaQuery('(min-width: 1392px)'),
  };
  useEffect(() => {
    dispatch(setBreakPoints(breakPoints));
  }, [breakPoints]);

  const isBodyLock = useSelector(state => state.modal.isBodyLock);

  document.body.style.overflow = isBodyLock ? 'hidden' : 'auto';

  return (
    <div className="app" >
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
    </div>
  );
}

export default App;
