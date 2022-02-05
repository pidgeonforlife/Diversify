import React, { useRef } from "react";
import './Registration.css'

function Registration() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <div className="RegisterContainer">
            <div className="Text">
                <h2>Already have an account?</h2>
                <form>
                    <div className="email">
                        <label>Email</label>
                        <input type={'email'} ref={emailRef} required />
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input type={'password'} ref={passwordRef} required />
                    </div>
                    <div className="password-confirm">
                        <label>Password Confirmation</label>
                        <input type={'password'} ref={passwordConfirmRef} required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>

        </div>
    );
}

export default Registration;