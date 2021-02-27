import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const NavbarComponent = () => {

  const [ click, setClick ] = useState(false);
  
  const handleClick = () => setClick(!click); 

  const closeHamburgerMenu = () => setClick(false); 

  return (
    <>
      <nav className='navbar'>
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
            <button className='btn-option-two btn-large'>Contact Me</button>
        </div>
      </nav>
    </>
  )
}

export default NavbarComponent;