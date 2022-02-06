import React from "react";
import './Preferences.css'

function Preference() {
    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
    }

    return (
        <div className="preferencesContainer">
            <form>
                <div className="photo">
                    <input type='file' onChange={this.fileSelectedHandler}/>
                </div>
                <div className="resume">

                </div>
                <div className="ethnicity">

                </div>
                <div className="distance">

                </div>
                <div className="gender">

                </div>
                <div className="experience">

                </div>
            </form>
        </div>
    );
}

export default Preference;