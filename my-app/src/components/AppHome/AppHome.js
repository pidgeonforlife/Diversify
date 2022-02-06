import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AppHome.css';

function AppHome() {

  return (
    <div className='appHomeContainer'>
        <div className='popularTitle'>
            <h2>Popular Jobs.</h2>
        </div>
        <div className='popularJobs'>
            <div className='job'>
                <img src='./images/webDevelopment.png' />
                <p>Back-End Developer</p>
                <button>More Info</button>
            </div>
            <div className='job'>
                <img src='./images/searchEngineOptimization.png' />
                <p>DevOps Engineer</p>
                <button>More Info</button>
            </div>
            <div className='job'>
                <img src='./images/branding.png' />
                <p>UI/UX</p>
                <button className='helpThisGuy'>More Info</button>
            </div>
        </div>

    </div>
  );
}

export default AppHome;