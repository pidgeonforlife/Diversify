import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AppHome.css';

function AppHome2() {

  return (
    <div className='appHome2Container'>
        <div className='popularTitle'>
            <h2>Similar Network.</h2>
        </div>
        <div className='similarNetwork'>
            <div className='network1'>
                <button>Connect</button>
                <img src='./images/Betty.png' />
                <h1>Alyssa M.</h1>
                <p>Student At UBC CPSC.</p>
            </div>
            <div className='network2'>
                <button>Connect</button>
                <img src='./images/Samantha.png' />
                <h1>Samantha C.</h1>
                <p>DevOps Engineer</p>
            </div>
            <div className='network3'>
                <button>Connect</button>
                <img src='./images/Ricky.png' />
                <h1>Ricky James</h1>
                <p>Entrepeneur at RBC</p>
            </div>
        </div>

    </div>
  );
}

export default AppHome2;