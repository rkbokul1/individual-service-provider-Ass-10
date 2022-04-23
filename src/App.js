import './App.css';
import Services from './Home/Services/Services';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>

        <Route path='*' element={<NotFound/>}></Route>

      </Routes>

      <Footer/>      
    </div>
  );
}

export default App;
