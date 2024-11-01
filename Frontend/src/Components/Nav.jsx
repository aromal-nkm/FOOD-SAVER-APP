import React from 'react'
import { assets } from '../assets/assets'
import './Nav.css'

const Nav = () => {
  return (
    <>
    <div    className='navbar'>
     <img src={assets.logo} alt="" />
     <ul>
        <li>HOME</li>
        <li>DONOR</li>
        <li>COLLECTING TEAM</li>
        <li>CONTACT US</li>
     </ul>
     <button> Login</button>

     




     </div>

    </>
  )
}

export default Nav