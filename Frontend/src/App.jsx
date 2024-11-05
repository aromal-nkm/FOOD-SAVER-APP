import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import DonorForm from './Pages/DonorForm'
import {Route, Routes} from 'react-router-dom'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>  
      <Routes>
    <Route path='/' element= {<Home/>}></Route>
    <Route path='/donor' element={<DonorForm/>}></Route>
    


   </Routes>
   
   
    </>
  )
}

export default App
