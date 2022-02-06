import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JobBoard.css';

function JobBoard() {

  return (
    <div className='jobBoardContainer' id='contact'>
        <div className='jobOfDay'>
            <img src='./images/GoogleJob.png' />
        </div>
        <div className='jobBoardFeatures'>
            <div className='feature1'>
                <i class="fas fa-search"></i>
                {/* <p>Find Jobs</p> */}
            </div>
            <div className='feature2'>
                <i class="far fa-id-badge"></i>
                {/* <p>Profile</p> */}
            </div>
            <div className='feature3'>
                <i class="far fa-handshake"></i>
                {/* <p>Match Me</p> */}
            </div>
        </div>

    </div>
  );
}

export default JobBoard;