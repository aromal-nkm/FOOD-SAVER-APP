import React from 'react'
import { assets } from '../assets/assets'
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div    className='navbar'>
     <img src={assets.logo} alt="" />
     <ul>
     <Link to={'/'}>   <li>HOME</li> </Link>
     <Link to={'/donor'}><li>DONOR</li></Link>
     <li>COLLECTING TEAM</li>
        <li>CONTACT US</li>
     </ul>
     <button> Login</button>

     




     </div>

    </>
  )
}

export default Nav