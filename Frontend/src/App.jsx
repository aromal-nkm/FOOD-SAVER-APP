import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import DonorForm from './Pages/DonorForm'
import {Route, Routes} from 'react-router-dom'
import CollectionTeam from './Pages/CollectionTeam'
import Login from './Components/Login'
import Register from './Components/Register'
import Footer from './Components/Footer'
import AboutUs from './Pages/Aboutus'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>  

      <Routes>
    <Route path='/' element= {<Home/>}></Route>
    <Route path='/donor' element={<DonorForm/>}></Route>
    <Route path='/collect' element={<CollectionTeam/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/about' element={<AboutUs/>}></Route>
   </Routes>
   <Footer/>
   
    </>
  )
}

export default App
