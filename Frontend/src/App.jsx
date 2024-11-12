import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to get the current route
import './App.css';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import DonorForm from './Pages/DonorForm';
import { Route, Routes } from 'react-router-dom';
import CollectionTeam from './Pages/CollectionTeam';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';
import AboutUs from './Pages/Aboutus';

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation(); // Get the current route

  // Define routes where Nav and Footer should not appear
  const hideNavAndFooter =
    location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      
      {!hideNavAndFooter && <Nav />}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/donor' element={<DonorForm />} />
        <Route path='/collect' element={<CollectionTeam />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>

      {/* Render Footer only if not on login, root, or register page */}
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
