import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './ProfileNav.css';

function ProfileBody() {

  return (
    <div className='profileContainer'>
        <div className='imageProfile'>
            <img src='./images/Profile.png' />
        </div>
        <div className='buttonPContainer'>
            <div className='buttCont'>
                <button><i className="fas fa-cog"></i></button>
                <p>SETTINGS</p>
            </div>
            <div className='buttCont'>
                <button className='specialButton'><i className="fas fa-camera"></i></button>
                <p>ADD PHOTOS</p>
            </div>
            <div className='buttCont'>
                <button><i className="fas fa-edit"></i></button>
                <p>EDIT INFO</p>
            </div>
        </div>
    </div>
  );
}

export default ProfileBody;