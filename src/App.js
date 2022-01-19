
import Header from './componrnts/header/Header';
import Main from './componrnts/main/Main';
import Footer from './componrnts/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './componrnts/LoginPage/LoginPage';



function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={
          <>
            <Header className="header" />
            <Main className="main" />
            <Footer className="footer" />
          </>
        } />
        <Route path='/login' element={< Login />} />
      </Routes>
    </div>
  );
}

export default App;
