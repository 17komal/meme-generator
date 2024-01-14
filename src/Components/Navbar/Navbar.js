import React from 'react'
import logo from '../../img/logo.png';
import '../../App.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-left'>
        <img src={logo} className="logo_img" alt="logo" />
        <p className="logo_title">Meme Generator</p>
      </div>

    </div>
  )
}

export default Navbar
