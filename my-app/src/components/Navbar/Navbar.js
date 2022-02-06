import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='/images/Diversify.png'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href='/#about' className='nav-links' onClick={closeMobileMenu}>
              ABOUT
            </a>
          </li>
          <li className='nav-item'>
            <a href='/#project' className='nav-links' onClick={closeMobileMenu}>
              PROJECTS
            </a>
          </li>
          <li className='nav-item'>
            <a href='/#skills' className='nav-links' onClick={closeMobileMenu}>
              SKILLS
            </a>
          </li>
          <li className='nav-item'>
            <a href='/#contact' className='nav-links' onClick={closeMobileMenu}>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;