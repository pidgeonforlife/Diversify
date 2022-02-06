import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JobBoard.css';

function AvailableJob() {

  return (
      <div className='AvailableJobContainer'>
          <div className='jobLists'>
              <h1>DevOps Engineer</h1>
              <p>CareCru</p>
              <button className='lrnButton'>Learn More</button>
              <div className='learn'>
              <button className='newButton'>New!</button>
              </div>
          </div>
          <div className='jobLists'>
              <h1>DevOps Engineer</h1>
              <p>CareCru</p>
              <button className='lrnButton'>Learn More</button>
              <div className='learn'>
              <button className='newButton'>New!</button>
              </div>
          </div>
          <div className='jobLists'>
              <h1>DevOps Engineer</h1>
              <p>CareCru</p>
              <button className='lrnButton'>Learn More</button>
              <div className='learn'>
              <button className='newButton'>New!</button>
              </div>
          </div>
          <div className='jobLists'>
              <h1>DevOps Engineer</h1>
              <p>CareCru</p>
              <button className='lrnButton'>Learn More</button>
              <div className='learn'>
              <button className='newButton'>New!</button>
              </div>
          </div>
      </div>
  );
}

export default AvailableJob;