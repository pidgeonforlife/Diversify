import React from "react";
import { Link } from 'react-router-dom';
import './Carousel.css'

function HomePage() {
    return (
        <div className="homeContainer">
            <div className="loginContainer">
                <p>Let's Get Started!</p>
                <Link to="/register">
                    <button>Create Account</button>
                </Link>
                <img className="colourfulWave" src="./images/colourfulwaves.png" />
                <img className="blueWave" src="./images/homeFixedWave.png" />
            </div>
            <div className="infoContainer">
                <h1>Job Opportunities For All<span style={{color: '#94CBFF'}}>.</span></h1>
                <p>At Diversify, we know how hard it is for the diverse community around the world to
                    find opportunities within the tech industry. Let us help you by joining our community you will
                    have access to all the resources to make you successful!
                </p>
                <img className='infoImage' src="./images/homeSolution.png" />
                <div className="buttonContainer">
                    <Link to='/'>
                        <button className="button1">Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className="button2">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;