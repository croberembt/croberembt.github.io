import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Button } from '../Button/Button'; 
import './Navbar.css';

const Navbar = () => {

  const [ click, setClick ] = useState(false);

  const [button, setButton] = useState(true); 
  
  const handleClick = () => setClick(!click); 

  const closeHamburgerMenu = () => setClick(false); 

  const showButton = () => {
    if (window.innerWidth <=960) {
      setButton(false); 
    } else {
      setButton(true); 
    }
  };

  window.addEventListener('resize', showButton); 

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          CALLI O
        </Link>
        <div className='hamburger-menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeHamburgerMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-links' onClick={closeHamburgerMenu}>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/skills' className='nav-links' onClick={closeHamburgerMenu}>
              Skills
            </Link>
          </li>
        </ul>
        <Button buttonStyle='custom-button-sea-foam'>BUTTON TEXT</Button>
      </div>
    </div>
  )
}

export default Navbar;