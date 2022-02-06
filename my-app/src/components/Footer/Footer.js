import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {

  return (
    <div className='connectContainer' id='contact'>
        <div className='footerImage'>
            <img src='./images/FooterBlob.png' />
        </div>
        <div className='footerBar'>
            <div className='footerButtonContainer'>
                <Link to='/apphome'> 
                    <button><i class="fas fa-home"></i></button>
                </Link>
                <button><i class="fas fa-briefcase"></i></button>
                <button><i class="fas fa-comments"></i></button>
                <Link to='/app'>
                    <button><i class="fas fa-user"></i></button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Footer;