import './App.css';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/User/Register/Register';
import Login from './Pages/User/Login/Login';
import About from './Pages/About/About';
import ServiceDetails from './Pages/Home/Service/ServiceDetails/ServiceDetails';
import RequireAuth from './Components/RequireAuth';
import Blog from './Blog/Blog';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <ServiceDetails />
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='*' element={<NotFound />}></Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
