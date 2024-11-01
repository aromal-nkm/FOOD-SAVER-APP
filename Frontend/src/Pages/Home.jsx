import React from 'react';
import './Home.css';
import { assets } from '../assets/assets';

const Home = () => {
  return (
    <div className='img-container'>
      <img 
        src={assets.header}
        alt="Food Waste Awareness" 
        className='header-image' 
      />
      <div className='paradiv'>
        <p id='para'>
        <i>"Every meal saved is a meal shared. Join us in reducing food waste and nourishing our community—one bite at a time!"</i>
      </p>
      </div>
      
    </div>
  );
}

export default Home;
