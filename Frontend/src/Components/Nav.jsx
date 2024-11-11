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
     <Link to={'/collect'}><li>COLLECTING TEAM</li></Link>
        <li>CONTACT US</li>
     </ul>
     <li><Link to="/login"><button>Login</button></Link></li>

     




     </div>

    </>
  )
}

export default Nav